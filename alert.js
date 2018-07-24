window.confirm = function(str,callback)
{
	var message = document.getElementById("confirmtip")
	if(message){
		document.body.removeChild(document.getElementById("confirmtip"));
	}
    var conFram = document.createElement("div");
    conFram.id ="confirmtip";
    conFram.style.display="block";
    conFram.className="paypal-layer";
    conFram.style.zIndex = "300";
    strHtml = "<table id=\"ddd\" class=\"table table-hover\">";
    strHtml += "<thead>";
    strHtml += "<tr>";
    strHtml +="<th class=\"paypal-close text-right\" id=\"title_close_cart\"><a style=\"color: #fff\" href=\"javascript:Cancel();\">Close</a></th>";
    strHtml +="</tr>";
    strHtml +="</thead>";
    strHtml +="<tbody><tr>";
    strHtml +="<td class=\"text-center\"><br><span id=\"msgContent\">"+str+"</span><br><br></td>";
    strHtml +="</tr>";
    strHtml +="<tr>";
    strHtml +="<td class=\"text-center\" id=\"botton_Confirm_cart\"> <button class=\"btn-primary\" onclick=\"Conok()\">Confirm</button><button class=\"btn-primary\" onclick=\"Cancel()\">Cancel</button></td>";
    strHtml +="</tr>";
    strHtml +="</tbody></table>";
    conFram.innerHTML = strHtml;
    document.body.appendChild(conFram);
    this.Conok = function(){
    	 if(callback && typeof callback == "function")
    		conFram.style.display = "none";	
             callback( true );
         };
    this.Cancel = function(){
    	conFram.style.display = "none";	
    };
}
window.alert = function(str)
{
	var message = document.getElementById("alertip")
	if(message){
		document.body.removeChild(document.getElementById("alertip"));
	}
    var alertFram = document.createElement("div");
    alertFram.id ="alertip";
    alertFram.style.display="block";
    alertFram.className="paypal-layer";
    alertFram.style.zIndex = "300";
    strHtml = "<table class=\"table table-hover\">";
    strHtml += "<thead>";
    strHtml += "<tr>";
    strHtml +="<th class=\"paypal-close text-right\" id=\"title_close_cart\"><a style=\"color: #fff\" href=\"javascript:alertConfirm();\">Close</a></th>";
    strHtml +="</tr>";
    strHtml +="</thead>";
    strHtml +="<tbody><tr>";
    strHtml +="<td class=\"text-center\"><br><span id=\"msgContent\">"+str+"</span><br><br></td>";
    strHtml +="</tr>";
    strHtml +="<tr>";
    strHtml +="<td class=\"text-center\" id=\"botton_Confirm_cart\"> <button class=\"btn-primary\" onclick=\"alertConfirm()\">Confirm</button></td>";
    strHtml +="</tr>";
    strHtml +="</tbody></table>";
    alertFram.innerHTML = strHtml;
    document.body.appendChild(alertFram);
    this.alertConfirm = function(){
        alertFram.style.display = "none";
    }
}
