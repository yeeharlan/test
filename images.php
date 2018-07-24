<?php
/**
 * 图片处理程序
 */
                $imgpng = "F:\aaa.png";//获取图片
                    header('Content-Type: image/png');
                    $im = @imagecreatefrompng($imgpng);
                    $black = imagecolorallocate($im, 0, 0, 0);

                    $text = '*';
                    $font = 'F:\WWW\ZF2\arial.ttf';//引入字体
                    imagettftext($im, 80, 0, 535, 440, $black, $font, $text);//更改字体大小尺寸颜色
                    imagepng($im,$imgpng);//保存图片（覆盖源图片）
                    imagedestroy($im);
?>
