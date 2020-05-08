      function aadhar(tb)
      {
        x=tb.value;
        pattern =new RegExp("^\\d{12}$");
        res=pattern.test(x);
        var y = document.getElementById('aadhar');
        var z = document.getElementById('button');
        if(res){
          y.innerHTML = '';
          z.disabled = '';
        }
        else{
          y.innerHTML = 'Check Aadhar';
          z.disabled = 'True';
        }
      }

      function aadharn(tb)
      {
        x=tb.value;
        pattern =new RegExp("^\\d{12}$");
        res=pattern.test(x);
        var y = document.getElementById('aadharn');
        var z = document.getElementById('buttono');
        if(res){
          y.innerHTML = '';
          z.disabled = '';
        }
        else{
          y.innerHTML = 'Check Aadhar';
          z.disabled = 'True';
        }
      }


       function mobile(tb)
      {
        x=tb.value;
        pattern =new RegExp("^\\d{10}$");
        res=pattern.test(x);
        var y = document.getElementById('mobile');
        var z = document.getElementById('button');
        if(res){
          y.innerHTML = '';
          z.disabled = '';
        }
        else{
          y.innerHTML = 'Check Mobile';
          z.disabled = 'True';
        }
      }

      function mobo(tb)
     {
       x=tb.value;
       pattern =new RegExp("^\\d{10}$");
       res=pattern.test(x);
       var y = document.getElementById('mobileo');
       var z = document.getElementById('buttono');
       if(res){
         y.innerHTML = '';
         z.disabled = '';
       }
       else{
         y.innerHTML = 'Check Mobile';
         z.disabled = 'True';
       }
     }



      function amt(tb)
      {
        x = tb.value;
        var y = document.getElementById('amt');
        var z = document.getElementById('button');
        if(x > 99){
          y.innerHTML = '';
            z.disabled = '';
        }
        else{
          y.innerHTML = 'Booking Amount Should be greater than $ 100';
            z.disabled = 'True';
        }
      }

      function amto(tb)
      {
        x = tb.value;
        var y = document.getElementById('amto');
        var z = document.getElementById('buttono');
        if(x == 100){
          y.innerHTML = '';
            z.disabled = '';
        }
        else{
          y.innerHTML = 'Booking amount should be $ 100';
            z.disabled = 'True';
        }
      }

  function bookie(tb)
  {
    x=tb.value;
    pattern =new RegExp("[A-Za-z]+( )[A-Za-z]+[A-Za-z]+$");
    res=pattern.test(x);
    npattern =new RegExp("[a-zA-Z]");
    nres=pattern.test(x)
    var z = document.getElementById('button');
    if(res==true)
    {
      y=x.split(" ");
      for(i=0;i<y.length;i++)
      {
        s=y[i].substr(0,1);
        s=s.toUpperCase();
        y[i]=s+y[i].substr(1);
      }
      for(j=1;j<y.length;j++)
      {
        if(y[j]!="");
        y[0]=y[0]+" "+y[j];
      }
      document.getElementById("bookiename").value=y[0];
      document.getElementById("bookie").innerHTML="";
      z.disabled = '';
    }
    else if(nres==false)
    { y=x;
        s=y.substr(0,1);
        s=s.toUpperCase();
        y=s+y.substr(1);
      document.getElementById("bookiename").value=y;
      document.getElementById("bookie").innerHTML="";
      z.disabled = '';
    }
    else
    {
      document.getElementById("bookie").innerHTML=" name format incorrect.";
      z.disabled = 'True';
    }
  }


  function bookiee(tb)
  {
    x=tb.value;
    pattern =new RegExp("[A-Za-z]+( )[A-Za-z]+[A-Za-z]+$");
    res=pattern.test(x);
    npattern =new RegExp("[a-zA-Z]");
    nres=pattern.test(x)
    var z = document.getElementById('buttono');
    if(res==true)
    {
      y=x.split(" ");
      for(i=0;i<y.length;i++)
      {
        s=y[i].substr(0,1);
        s=s.toUpperCase();
        y[i]=s+y[i].substr(1);
      }
      for(j=1;j<y.length;j++)
      {
        if(y[j]!="");
        y[0]=y[0]+" "+y[j];
      }
      document.getElementById("bookienam").value=y[0];
      z.disabled = '';
    }
    else if(nres==false)
    { y=x;
        s=y.substr(0,1);
        s=s.toUpperCase();
        y=s+y.substr(1);
      document.getElementById("bookienam").value=y;
      z.disabled = '';
    }
    else
    {
      z.disabled = 'True';
      document.getElementById('namef').innerHTML = "Check name format";
    }
  }




  function mail(tb)
  {
    x=tb.value
    pattern =new RegExp("[A-Za-z0-9]+(@gmail.com)$")
    res=pattern.test(x)
    var z = document.getElementById('button');
    if(res==true)
    {
      document.getElementById("mail").innerHTML="";
      z.disabled = '';
    }
    else
    {
      document.getElementById("mail").innerHTML=" Please enter valid gmail id.";
      z.disabled = 'True';
    }
  }

  function onmail(tb)
  {
    x=tb.value
    pattern =new RegExp("[A-Za-z0-9]+(@gmail.com)$")
    res=pattern.test(x)
    var z = document.getElementById('buttono');
    if(res==true)
    {
      document.getElementById("onemail").innerHTML="";
      z.disabled = '';
    }
    else
    {
      document.getElementById("onemail").innerHTML=" Please enter valid gmail id.";
      z.disabled = 'True';
    }
  }

  function passcheck(tb){
    x=tb.value;
    pattern =new RegExp("^[a-zA-Z0-9~!#$@&*_-]{8,16}");
    res = pattern.test(x);
    var z = document.getElementById('button');
    if (res == true){
      document.getElementById("passan").innerHTML="";
      z.disabled = '';
    }
    else{
      document.getElementById("passan").innerHTML=" Please enter strong passwor min length 8 letter and special character.";
      z.disabled = 'True';
    }
  }

  function cpasscheck(tb){
    x=tb.value;
    y=document.getElementById("passwd").value;
    var z = document.getElementById('button');
    if(x==y){
      document.getElementById("cpassan").innerHTML="";
      z.disabled = '';
    }
    else{
      document.getElementById("cpassan").innerHTML="Password does not match";
      z.disabled = 'True';
    }

  }


  function aler(){
    alert("Thank You for choosing us , your response will be successfully recorded.");
  }


  function nonegative(tb){
    var num = tb.value;
    var z = document.getElementById('buttono');
    console.log(num)
    if(num <= 0){
      document.getElementById('noneg').innerHTML = 'Quantity can\'t be null';
      z.disabled = 'True';
    }
    else{
      document.getElementById('noneg').innerHTML = '';
      z.disabled = '';
    }
  }

  function nonegativeo(tb){
    var num = tb.value;
    var z = document.getElementById('button');
    console.log(num)
    if(num <= 0){
      document.getElementById('nonego').innerHTML = 'Quantity can\'t be null';
      z.disabled = 'True';
    }
    else{
      document.getElementById('nonego').innerHTML = '';
      z.disabled = '';
    }
  }
