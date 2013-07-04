<!DOCTYPE html>
<!--<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

--><html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title></title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="design/css/layout.css" />
		<link rel="stylesheet" type="text/css" href="design/css/style.css" />
		<link rel="stylesheet" type="text/css" href="design/css/content.css" />

	</head>
	<body>
		<div id="wrap">
			<div id="cont">
				<div id="user-panel">
					<ul class="menu">
						<li>Rules</li>
						<li>Battles</li>
						<li>My profile</li>
						<li>Best users</li>
					</ul>
					<div class="info">
						<span class="username">termilv</span>
						<span class="logout">logout</span>
					</div>
				</div>
<?php
			include((isset($_GET['p']) ? $_GET['p'] : 'battles').'.php');?>

			</div>
		</div>
	</body>
</html>