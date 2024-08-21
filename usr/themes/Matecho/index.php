<?php
/**
 * 基于 <a target="_blank" href="https://www.mdui.org/">MDUI</a> 的Typecho主题
 * 
 * @package Matecho
 * @author KawaiiZapic
 * @version 0.1.0
 * @link https://github.com/KawaiiZapic/Matecho
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

/** @var \Widget\Archive $this */
$this->need('header.php');
Typecho\Plugin::export();
?>
<div class="m-zh4phs">
    <div id="matecho-app-bar-large-label">
        <div class="m-1b7dva" id="matecho-app-bar-large-label__inner">
            <div class="m-cx32ec">
                <?php $this->archiveType === 'index' ? $this->options->title() : $this->archiveTitle(array(
                    'category' => _t('分类 %s 下的文章'),
                    'search' => _t('包含关键字 %s 的文章'),
                    'tag' => _t('标签 %s 下的文章'),
                    'author' => _t('%s 发布的文章')
                ),'','');?>
            </div>
            <div class="m-06dco7">
                <?php
                if ($this->archiveType === 'index') {
                    $this->options->description();
                } else if ($this->archiveType === "category" || $this->archiveType == "tag" || $this->archiveType === "search") {
                    $description = Matecho::tpVersion("1.2.1") > 0 ? $this->archiveDescription : $this->description;
                    if ($description) {
                        echo $description;
                    } else {
                        printf("共 %d 篇文章", $this->getTotal());
                    }
                } else {
                    echo $this->archiveType;
                }
                ?>
            </div>
        </div>
    </div>
    <div class="m-okkv4k">
            <?php while ($this->next()){ ?>
                <mdui-card clickable="false" class="m-1b7dva matecho-article-card">
                        <a href="<?php $this->permalink(); ?>" title="<?php $this->title(); ?>" class="m-rjsx37" style="background-image: url('<?php Matecho::cover($this);?>')"></a>
                        <div class="m-8q9v1i">
                            <div class="m-q8sew2" style="color: rgb(var(--mdui-color-primary-light));">
                                <?php $this->category(" | "); ?>
                            </div>
                            <a title="<?php $this->title(); ?>" class="m-47lsyt matecho-article-link" href="<?php $this->permalink(); ?>">
                                <?php $this->title(); ?>
                                <?php if (strlen($this->title) == 0) {?>
                                    <i>无标题文章</i>
                                <?php } ?>
                            </a>
                            <div class="m-m5tqq5">
                                <?php if (!$this->hidden && $this->fields->description) echo $this->fields->description; else $this->excerpt(300,'...'); ?>
                            </div>
                        </div>
                        <div class="m-d5ephw">
                            <div class="m-5dj0gf">
                                <mdui-button variant="text" class="m-vrjzy2 matecho-info-button" disabled>
                                    <mdui-icon-calendar-month slot="icon"></mdui-icon-calendar-month>
                                    <?php $this->date(); ?>
                                </mdui-button>
                                <mdui-button variant="text" class="m-vrjzy2 matecho-info-button" disabled>
                                    <mdui-icon-mode-comment--outlined slot="icon"></mdui-icon-mode-comment--outlined>
                                    <?php $this->commentsNum('%d'); ?>
                                </mdui-button>
                            </div>
                            <a title="<?php $this->title(); ?>" href="<?php $this->permalink(); ?>">
                                <mdui-button class="matecho-article-enter" variant="text">
                                    阅读全文
                                    <mdui-icon-chevron-right slot="end-icon"></mdui-icon-chevron-right>
                                </mdui-button>
                            </a>
                        </div>
                    </mdui-card>

            <?php } ?>

        </div>
        <?php if($this->getTotal() == 0) { ?>
            <div class="m-46xpo4">
                <mdui-icon-inbox class="m-m8jxko"></mdui-icon-inbox>
                没有文章
            </div>
        <?php } ?>
        <?php $TotalPage=ceil($this->getTotal()/$this->parameter->pageSize); ?>
        <?php if ($TotalPage > 1){ ?>
            <div class="m-e53rf3">
                <mdui-segmented-button-group>
                    <?php if ($this->_currentPage > 1) {
                        $this->pageLink('<mdui-segmented-button><mdui-icon-arrow-back slot="icon"></mdui-icon-arrow-back>上一页</mdui-segmented-button>');
                    } else { ?>
                        <mdui-segmented-button disabled><mdui-icon-arrow-back slot="icon"></mdui-icon-arrow-back>上一页</mdui-segmented-button>
                    <?php } ?>
                    <mdui-segmented-button><?php echo $this->_currentPage; ?> / <?php echo $TotalPage; ?></mdui-segmented-button>
                    <?php if ($this->_currentPage < $TotalPage) {
                        $this->pageLink('<mdui-segmented-button><mdui-icon-arrow-forward slot="end-icon"></mdui-icon-arrow-forward>下一页</mdui-segmented-button>','next');
                    } else { ?>
                        <mdui-segmented-button disabled><mdui-icon-arrow-forward slot="end-icon"></mdui-icon-arrow-forward>下一页</mdui-segmented-button>
                    <?php } ?>
                </mdui-segmented-button-group>
            </div>
        <?php } ?>
</div>
<?php $this->need('footer.php'); ?>