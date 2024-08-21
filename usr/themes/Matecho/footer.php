<?php 
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
Typecho\Plugin::export();
/** @var \Widget\Archive $this */
?>
                </div>
            <mdui-card class="m-wxakif">
                <div class="mdui-prose">
                    <div>Copyright &copy; <?php echo date("Y"); ?> <a href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title(); ?></a></div>
                    <?php if(Matecho::$BeianText) { ?>
                        <div class="m-iyw1ix"><?php echo Matecho::$BeianText ?></div>
                    <?php }?>
                </div>
            </mdui-card>
        </main>
    <script type="text/javascript">
		!new RegExp("/Edge?\\/(79|[89]\\d|\\d{3,})\\.\\d+(\\.\\d+|)|Firefox\\/(6[7-9]|[7-9]\\d|\\d{3,})\\.\\d+(\\.\\d+|)|Chrom(ium|e)\\/(6[3-9]|[7-9]\\d|\\d{3,})\\.\\d+(\\.\\d+|)([\\d.]+$|.*Safari\\/(?![\\d.]+ Edge\\/[\\d.]+$))|(Maci|X1{2}).+ Version\\/(1[1-9]|[2-9]\\d|\\d{3,})\\.\\d+([,.]\\d+|)( \\(\\w+\\)|)( Mobile\\/\\w+|) Safari\\/|Chrome.+OPR\\/([5-9]\\d|\\d{3,})\\.\\d+\\.\\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(1[1-9]|[2-9]\\d|\\d{3,})[._]\\d+([._]\\d+|)|Android:?[ /-](12[2-9]|1[3-9]\\d|[2-9]\\d{2}|\\d{4,})(\\.\\d+|)(\\.\\d+|)|Mobile Safari.+OPR\\/(7[3-9]|[89]\\d|\\d{3,})\\.\\d+\\.\\d+|Android.+Firefox\\/(12[3-9]|1[3-9]\\d|[2-9]\\d{2}|\\d{4,})\\.\\d+(\\.\\d+|)|Android.+Chrom(ium|e)\\/(12[2-9]|1[3-9]\\d|[2-9]\\d{2}|\\d{4,})\\.\\d+(\\.\\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(1[5-9]|[2-9]\\d|\\d{3,})\\.\\d+\\.\\d+|SamsungBrowser\\/([89]|\\d{2,})\\.\\d+|Android.+MQ{2}Browser\\/(1[3-9]|[2-9]\\d|\\d{3,})(\\.\\d+|)(\\.\\d+|)|baidubrowser[\\s/](1[3-9]|[2-9]\\d|\\d{3,})(\\.\\d+|)(\\.\\d+|)|K[Aa][Ii]OS\\/([3-9]|\\d{2,})\\.\\d+(\\.\\d+|)/").test(navigator.userAgent)&&(document.body.innerHTML+='<div class="un-br"><h1 class="un-br_sf">{ ᗜ˰ᗜ }</h1> <h1>浏览器不受支持</h1><p>您当前使用的浏览器不受支持，请更新你的浏览器。</p></div>')
	</script>
    <?php echo Matecho::$ExtraCode; ?>
    <?php Matecho::themeCSS(); Matecho::generateJSOptions(); ?>
</body>
</html>