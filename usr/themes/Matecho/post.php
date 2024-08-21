<?php
if (!defined('__TYPECHO_ROOT_DIR__'))
    exit;

/** @var \Widget\Archive $this */
$this->need('header.php');
?>
<div class="m-58f8eq matecho-article-wrapper">
    <?php if (!$this->hidden) { ?>
        <div id="matecho-app-bar-large-label">
            <div class="m-6ibg8y" id="matecho-app-bar-large-label__inner">
                <div class="m-5niwo3" style="color: rgb(var(--mdui-color-primary-light));">
                    <?php $this->category(" | "); ?>
                </div>
                <div class="m-k278lf">
                    <?php $this->title(); ?>
                </div>
                <div class="m-06dco7">
                    <?php
                    if ($this->archiveType === 'post') {
                        if (!$this->hidden && $this->fields->description) {
                            echo $this->fields->description;
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
        <div class="m-s3vkaf"
            style="background-image: url('<?php Matecho::cover($this); ?>')">
        </div>
        <div class="m-47el1b">
            <div class="m-0qwcsd">
                <mdui-avatar aria-label="<?php $this->author() ?>"
                    src="<?php Matecho::Gravatar($this->author->mail); ?>"></mdui-avatar>
                <div class="m-1b7dva">
                    <div>
                        <?php $this->author(); ?>
                    </div>
                    <div class="m-gf8op3">
                        <mdui-button variant="text" class="m-vrjzy2 matecho-info-button" disabled>
                            <mdui-icon-calendar-month slot="icon"></mdui-icon-calendar-month>
                            <?php $this->date(); ?>
                        </mdui-button>
                        <mdui-button variant="text" class="m-vrjzy2 matecho-info-button" disabled>
                            <mdui-icon-mode-comment--outlined slot="icon"></mdui-icon-mode-comment--outlined>
                            <?php $this->commentsNum('%d'); ?>
                        </mdui-button>
                    </div>
                </div>
            </div>
            <article class="m-609775 mdui-prose line-numbers">
                <?php echo $this->content(); ?>
            </article>
            <?php
            if (count($this->tags) > 0) { ?>
                <div class="m-mjctfu">
                    <mdui-icon-label--outlined class="m-q6zipt"></mdui-icon-label--outlined>
                    <?php foreach ($this->tags as $tag) {
                        echo "<a href=\"" . $tag["permalink"] . "\">" . $tag["name"] . "</a>";
                    } ?>
                </div>
            <?php }
            ?>
            <mdui-divider class="m-ix8urh"></mdui-divider>
            <div class="m-6g4h0b">
                <?php $comments = $this->comments(); ?>
                <div class="m-0v21dx">
                    评论
                    <span class="m-yppgec">
                        <?php $this->commentsNum('%d'); ?>
                    </span>
                </div>
                <div id="matecho-comment-list">
                    <?php
                    while ($comments->next()) {
                        Matecho::toComment($comments);
                    }
                    ?>
                </div>
                <?php if ($comments->___length() === 0) { ?>
                    <div class="m-tm0hb5 text-md" id="matecho-no-comment-placeholder">没有评论</div>
                <?php } ?>
                <div class="m-kludym matecho-comment-form matecho-comment-form__main <?php echo $this->allowComment ?"" : "matecho-comment-form__lock"; ?>"
                    id="<?php $this->respondId(); ?>">
                    <div class="m-j8124d matecho-form-lock-mask">
                        <mdui-icon-lock class="m-pedjmu"></mdui-icon-lock>
                        评论已关闭
                    </div>
                    <div class="matecho-form-loading-mask">
                        <mdui-circular-progress></mdui-circular-progress>
                    </div>
                    <div class="m-jg6bnx matecho-comment-form-title">发表评论</div>
                    <!-- "data-pjax-state" prevent Pjax handle this form. -->
                    <form class="m-a3o3j6" method="post" action="<?php $this->commentUrl() ?>" role="form"
                        data-pjax-state>
                        <?php if ($this->user->hasLogin()) { ?>
                            <div class="m-r50qrp">
                                <mdui-avatar src="<?php Matecho::Gravatar($this->user->mail) ?>"></mdui-avatar>
                                <span><?php $this->user->screenName(); ?></span>
                            </div>
                        <?php } else { ?>
                            <div class="m-9oc628">
                                <mdui-text-field class="m-9xl5sa" label="称呼" variant="outlined" type="text"
                                    name="author" value="<?php $this->remember('author'); ?>" required></mdui-text-field>
                                <mdui-text-field class="m-yiqba2" label="邮箱" variant="outlined" type="email"
                                    name="mail" value="<?php $this->remember('mail'); ?>" <?php if ($this->options->commentsRequireMail): ?> required<?php endif; ?>></mdui-text-field>
                                <mdui-text-field class="m-dfzs2l" label="网址" variant="outlined"
                                    type="url" name="url" value="<?php $this->remember('url'); ?>" <?php if ($this->options->commentsRequireURL): ?> required<?php endif; ?>></mdui-text-field>
                            </div>
                        <?php } ?>
                        <div class="m-0sz39h">
                            <mdui-text-field variant="outlined" label="评论内容" rows="3" name="text"
                                required></mdui-text-field>
                            <div class="m-6g4h0b">
                                <mdui-button class="matecho-comment-submit-btn" type="submit">评论</mdui-button>
                                <mdui-button class="matecho-comment-cancel-btn" variant="outlined">取消回复</mdui-button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    <?php } else { ?>
        <div id="matecho-app-bar-large-label">
            <div class="m-7cx8yq"
                id="matecho-app-bar-large-label__inner">
                <mdui-icon-lock class="m-4erfuy"></mdui-icon-lock>
                <div class="m-pm31lw">
                    <?php $this->archiveTitle(
                        array(),
                        '',
                        ''
                    ); ?>
                </div>
            </div>
        </div>
        <form class="m-hauzvr" id="matecho-password-form" method="post"
            action="<?php echo $this->security->getTokenUrl($this->permalink); ?>" data-pjax-state>
            <div class="matecho-form-loading-mask">
                <mdui-circular-progress></mdui-circular-progress>
            </div>
            <mdui-text-field enterkeyhint="done" toggle-password required label="密码" variant="outlined" type="password"
                name="protectPassword">
                <span slot="helper" class="m-5ns4uo">密码</span>
            </mdui-text-field>
            <input type="hidden" name="protectCID" value="<?php $this->cid(); ?>" />
            <mdui-button type="submit" class="m-4my0lw">解锁</mdui-button>
        </form>
    <?php } ?>
</div>
<?php if ($this->options->commentsAntiSpam) { ?>
    <script type="text/javascript">
        (function () {
            ['scroll', 'mousemove', 'keyup', 'touchstart'].map(v =>
                document.addEventListener(v, function () {
                    window.__MATECHO_ANTI_SPAM__ = <?php echo \Typecho\Common::shuffleScriptVar($this->security->getToken($this->request->getRequestUrl())); ?>
                }, { once: true, passive: true })
            );
        })();
    </script>
<?php } ?>
<?php $this->need('footer.php'); ?>