<div id="room">
	<div class="map-cont">
		<div class="img"><img alt="map" src="map.png" /></div>
	</div>
	<div id="room-chat" class="chat">
		<ol class="t t-s"><?php
			for($i=0;$i<=10;$i++){?>

			<li class="map">
				<ul>
					<li class="added">[<span class="time">12:23</span>]</li>
					<li class="name">Super user</li>
					<li class="message">: <span class="text"><?php echo substr('simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the', rand(0,100), rand(0,100));?></span></li>
				</ul>
			</li><?php
			}?>

		</ol>
		<div class="new">
			<textarea cols="35" rows="3" placeholder="Press Enter to add message. Press ctrl+Enter for new line."></textarea>
		</div>
	</div>
	<div id="users">
		<h1>Super mapka</h1>
		<div class="link"><input type="text" value="http:/bco.termi.lv/g/#superMapka" /></div>
		<div class="timer">12:32</div>
		<ol class="t t-s"><?php
			for($i=0;$i<=10;$i++){?>

			<li class="map">
				<ul class="c">
					<li class="l w49 name">Super user</li>
					<li class="r w25 depth">10</li>
					<li class="r w25 kill">12</li>
				</ul>
			</li><?php
			}?>

		</ol>
	</div>

</div>