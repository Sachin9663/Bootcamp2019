
function checkPalindrome(){
	var s=document.getElementById("string").value;
	var b=s.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var n=b.length-1;
	var i=0;
	document.write("Given string is "+b+"<br/>");

	while(i<n){
		if (b[i]==b[n]) {
			i++;
			n--;
		}
		else{
			document.write("string is not palindrome");
			return;
		}
	}
	document.write("String is palindrome");

}