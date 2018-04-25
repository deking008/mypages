$(function(){
    //弹窗
	function TanWind(oid,cid,sid){
		var $oid = $("."+oid),
			$cid = $("."+cid),
			$sid = $("."+sid);
		$oid.click(function(){
			$sid.show();
		});
		$cid.click(function(){
			$sid.hide();
		})
	};
	
    TanWind("play-btn","cloes","warp-rules");//玩法说明

    TanWind("complaints","cloes","warp-tousu");//投诉

    //发红包弹出
    var fahongb = new DialogFx('#fahongb');
    $('.fahongb').on('click',function(){
        fahongb.toggle();
    });
    var linghongb = new DialogFx('#linghongb');
     $('.linghongb').on('click',function(){
        linghongb.toggle();
    });
})