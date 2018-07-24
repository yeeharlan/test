<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>excel简单导出</title>
</head>
<?php
    $filename="test.xls";
    $filename=mb_convert_encoding($filename,'gbk','utf-8');
    header( "Pragma: public" );
    header( "Expires: 0" );
    header("Accept-Ranges: bytes");
    header("Content-Disposition: attachment; filename=$filename");
    header("Content-Type:APPLICATION/OCTET-STREAM;charset=utf-8");
?>
<body>
<table border="1">
	<tr>
		<td><font color=red>1</font></td>
		<td><b>2</b></td>
		<td><h2>3</h2></td>
		<td style="background-color:blue;">4</td>
		<td>5</td>
		<td>字符串</td>
	</tr>
</table>
</body>
</html>







