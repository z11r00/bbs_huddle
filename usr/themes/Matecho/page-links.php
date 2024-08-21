<?php
/**
 * 友情链接
 *
 * @package custom
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

/** @var \Widget\Archive $this */
$this->need('header.php');
$links = Matecho::links();
$linksCount = count($links);
?>
<div class="m-zh4phs">
    <div id="matecho-app-bar-large-label">    
        <div class="m-m1rfz3" id="matecho-app-bar-large-label__inner">
            <div class="m-5niwo3" style="color: rgb(var(--mdui-color-primary-light));">
                <?php $this->category(" | "); ?>
            </div>
            <div class="m-k278lf">
                <?php $this->archiveType === 'index' ? $this->options->title() : $this->archiveTitle(array(
                    'category' => _t('分类 %s 下的文章'),
                    'search' => _t('包含关键字 %s 的文章'),
                    'tag' => _t('标签 %s 下的文章'),
                    'author' => _t('%s 发布的文章')
                ),'','');?>
            </div>
            <div class="m-06dco7">
                <?php
                    echo "$linksCount 位友人";
                ?>
            </div>
        </div>
    </div>
    <div class="m-1tpm01">
        <?php foreach ($links as $link) { ?>
            <a href="<?php echo $link["url"] ?>" title="<?php echo $link["name"] ?>">
                <mdui-card clickable class="m-mwkzu3">
                    <div class="m-p7v3cs">
                        <mdui-avatar class="m-cwv2zv" src="<?php echo $link["image"] ?>"></mdui-avatar>
                        <span class="m-tafnt9"><?php echo $link["name"] ?></span>
                    </div>
                    <div class="m-se2gih"><?php echo $link["description"] ?></div>
                </mdui-card>
            </a>
        <?php } ?>
    </div>
</div>
<?php $this->need('footer.php'); ?>