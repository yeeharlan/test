<?php
	$activeCode = '';
		$str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVUWXYZ";
		$strlen = strlen($str) - 1;
		for($i = 0; $i < 12; $i ++ ){
			$activeCode .= $str[rand(0, $strlen)];
		}
