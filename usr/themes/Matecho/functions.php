<?php
use Typecho\Widget\Helper\Form\Element\Radio;
use Typecho\Widget\Helper\Form\Element\Hidden;
use Typecho\Widget\Helper\Form\Element\Text;
use Typecho\Widget\Helper\Form;
use Typecho\Widget\Helper\Form\Element\Textarea;
use Utils\Helper;
use Widget\Archive;
function themeConfig(Form $form): void {
    Matecho::generateThemeCSS();
    $form->addInput(new Text("ColorScheme", null, "", "主题色", "十六进制的主题色, 如#E91E63."));
    $form->addInput(new Text("GravatarURL", null, "https://gravatar.loli.net/avatar/", "Gravatar镜像", ""));
    if (!is_writable(__DIR__."/assets/color-scheme.css")) {
        $form->addInput(new Radio("ColorSchemeCache", [0 => "禁用"], 0, "颜色主题样式缓存", "(无法写入缓存, 检查主题目录权限) 缓存主题样式到本地静态文件, 可以利用缓存加快网页加载速度."));
    } else {
        $form->addInput(new Radio("ColorSchemeCache", [1 => "启用", 0 => "禁用"], 0, "颜色主题样式缓存", "缓存主题样式到本地静态文件, 可以利用缓存加快网页加载速度, 需要主题目录可写, 不需要持久化, 在文件不存在时自动生成."));
    }
    $form->addInput(new Radio("EnableFancyBox", [1 => "自动", 0 => "禁用"], 1, "FancyBox", "允许用户放大查看文章内的图片"));
    $form->addInput(new Radio("EnablePrism", [1 => "自动", 0 => "禁用"], 1, "Prism", "高亮页面上的代码, 默认支持的语言有限, 可以按需自行编译主题."));
    $form->addInput(new Radio("EnableKaTeX", [1 => "自动", 0 => "禁用"], 1, "KaTeX", "渲染LaTeX公式, 在使用\$或者\$\$包裹LaTeX公式即可自动渲染."));
    $form->addInput(new Text("BeianText", null, "", "备案信息", "显示在页脚版权信息下方"));
    $form->addInput(new Textarea("ExtraCode", null, "", "页脚HTML代码", "插入统计代码或者额外的插件"));
    $form->addInput(new Hidden("ColorSchemeCSS"));
    require("settings-header.php");
}

function themeInit(Archive $context): void {
    Matecho::$ColorScheme = Helper::options()->ColorScheme ?? "";
    Matecho::$GravatarURL = Helper::options()->GravatarURL ?? "";
    Matecho::$ColorSchemeCache = Helper::options()->ColorSchemeCache ?? false;
    Matecho::$BeianText = Helper::options()->BeianText ?? "";
    Matecho::$ExtraCode = Helper::options()->ExtraCode ?? "";
    if (Matecho::$ColorSchemeCache && Matecho::$ColorScheme && !file_exists(__DIR__."/assets/color-scheme.css")) {
        Matecho::generateThemeCSS();
    }
}

function themeFields($layout){
    $layout->addItem(new Text("cover", null, null, "文章封面", "替代文章默认的封面"));
    $layout->addItem(new Text("description", null, null, "文章描述", "替代文章内容显示在文章列表中文章标题的下方"));
}

class Matecho {
    static string $ColorScheme;
    static string $GravatarURL;
    static bool $ColorSchemeCache;
    static string $BeianText;
    static string $ExtraCode;

    static function assets(string $path = ''): void {
        echo Helper::options()->themeUrl.'/'.$path;
    }


    static function Gravatar(string $mail,int $size = 40): void {
        echo self::$GravatarURL.md5(strtolower($mail)).'?s='.$size.'&d=mp';
    }

    static function cover(Archive $archive): void {
        if (!$archive->fields->cover) {
            self::assets("assets/images/" . $archive->cid % 6 .  ".png");
        } else {
            echo $archive->fields->cover;
        }

    }

    static function generateJSOptions(): void {
        $options = Helper::options();
        echo "<script>window.__MATECHO_OPTIONS__=" . json_encode([
            "KaTeX" => $options->EnableKaTeX ? true : false,
            "FancyBox" => $options->EnableFancyBox ? true : false,
            "Prism" => $options->EnablePrism ? true : false
        ]) . ";</script>";
    }

    static function generateThemeCSS(): void {
        $css = Helper::options()->ColorSchemeCSS;
        file_put_contents(__DIR__."/assets/color-scheme.css", $css);
    }

    static function themeCSS(): void {
        if (!self::$ColorScheme) return;
        if (self::$ColorSchemeCache) {
            echo "<link rel=\"stylesheet\" href=\"". Helper::options()->themeUrl ."/assets/color-scheme.css?" . substr(Matecho::$ColorScheme, 1) . "\">";
        } else {
            $css = Helper::options()->ColorSchemeCSS;
            if (!$css) return;
            echo "<style>".$css."</style>";
        }
    }

    static function pageIcon(string | null $template): string {
        switch ($template) {
            case "page-links.php":
                return "link";
            case "page-board.php":
                return "mode-comment--outlined";
            default:
                return "insert-drive-file";
        }
    }

    static function activePage(Archive $archive, string $type, int $id = -1): void {
        $thisType = $archive->getArchiveType();
        if ($thisType == $type) {
            if ($thisType === "category" && $archive->categories[0]["mid"] !== $id) return;
            if ($thisType === "page" && $archive->cid !== $id) return;
            echo "active";
        }
    }

    static function toComment(\Widget\Comments\Archive &$comments): void {   
        $isTopLevel = $comments->levels === 0;
        if ($isTopLevel) {
    ?>
        <div class="m-p9l6hc matecho-comment-wrapper matecho-comment-parent" id="comment-<?php echo $comments->coid ?>">
            <div class="m-p7v3cs">
                <mdui-avatar class="matecho-comment-avatar"><?php $comments->gravatar(40) ?></mdui-avatar>
                <div class="m-wr2vx1 matecho-comment-author">
                    <?php $comments->author(); ?>
                </div>
                <span class="m-86yxje">#<?php echo $comments->coid; ?></span>
            </div>
            <div class="m-a1eapj">
                <div class="m-38v2j5 mdui-prose">
                    <?php $comments->content(); ?>
                </div>
                <div class="m-p7v3cs">
                    
                <div class="m-q7uc1d">
                    <?php $comments->date(); ?>
                    <?php if ($comments->status === "waiting") { ?>
                        <span class="m-80uifh">等待审核</span>
                    <?php } ?>
                </div>
                
                <mdui-button class="m-2b92h9 matecho-comment-reply" data-to-comment="<?php echo $comments->coid ?>" variant="text" class="m-ajci23">
                    回复
                </mdui-button>
                </div>
            </div>
            <div>
                
            </div>
            <?php if (count($comments->children) > 0) { ?>
                <div class="m-47lh6m matecho-comment-children-list">
                    <?php 
                        $row = (new ReflectionClass(\Widget\Comments\Archive::class))->getProperty("row");
                        $row->setAccessible(true);
                        $r = $row->getValue($comments);
                        foreach($comments->children as $child) {
                            $row->setValue($comments, $child);
                            self::toComment($comments);
                        }                
                        $row->setValue($comments, $r);
                        $row->setAccessible(false);
                    ?>
                </div>
            <?php } ?>
            <mdui-divider class="m-z6s3ou"></mdui-divider> 
        </div>
    <?php } else {?>
        <div class="m-p9l6hc matecho-comment-wrapper matecho-comment-child" id="comment-<?php echo $comments->coid ?>">
            <div class="m-p7v3cs">
                <mdui-avatar class="m-4z10ug matecho-comment-avatar"><?php $comments->gravatar(28) ?></mdui-avatar>
                <div class="m-v359r7 matecho-comment-author">
                    <?php $comments->author(); ?>
                </div>
                <span class="m-86yxje">#<?php echo $comments->coid; ?></span>
            </div>
            <div class="m-7efwm8">
                <div class="m-38v2j5 mdui-prose">
                    <?php if($comments->levels > 1) { ?>
                        <a class="m-iyw1ix" href="#comment-<?php echo $comments->parent; ?>">回复 #<?php echo $comments->parent; ?>:</a>
                    <?php } ?>
                    <?php $comments->content(); ?>
                </div>
                <div class="m-p7v3cs">
                    <div class="m-q7uc1d">
                        <?php $comments->date(); ?>
                    </div>
                    <mdui-button class="m-2b92h9 matecho-comment-reply" data-to-comment="<?php echo $comments->coid ?>" variant="text" class="m-ajci23">
                        回复
                    </mdui-button>
                    <?php if ($comments->status === "waiting") { ?>
                        <span class="m-80uifh">等待审核</span>
                    <?php } ?>
                </div>
            </div>      
        </div>
        <?php if (count($comments->children) > 0) { 
                $row = (new ReflectionClass(\Widget\Comments\Archive::class))->getProperty("row");
                $row->setAccessible(true);
                $r = $row->getValue($comments);
                foreach($comments->children as $child) {
                    $row->setValue($comments, $child);
                    self::toComment($comments);
                }                
                $row->setValue($comments, $r); 
                $row->setAccessible(false);
            } ?>   
    <?php }
    }

    static function tpVersion($version) {
        $version1Parts = explode('.', \Typecho\Common::VERSION);
        $version2Parts = explode('.', $version);
    
        $length = max(count($version1Parts), count($version2Parts));
    
        for ($i = 0; $i < $length; $i++) {
            $part1 = isset($version1Parts[$i]) ? intval($version1Parts[$i]) : 0;
            $part2 = isset($version2Parts[$i]) ? intval($version2Parts[$i]) : 0;
    
            if ($part1 < $part2) {
                return -1;
            } elseif ($part1 > $part2) {
                return 1;
            }
        }
    
        return 0;
    }

    static function links(): array {
        $options = \Typecho\Widget::widget('Widget_Options');
		if (!isset($options->plugins['activated']['Links'])) {
			throw new ErrorException("请先激活友链插件");
		}
        $db = \Typecho\Db::get();
		$prefix = $db->getPrefix();
		$options = \Typecho\Widget::widget('Widget_Options');
		$sql = $db->select()->from($prefix.'links');
		$sql = $sql->order($prefix.'links.order', \Typecho\Db::SORT_ASC);
		$links = $db->fetchAll($sql);
        return $links;
    }
}