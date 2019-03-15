<template>
  <footer class="mt-5">
    <div class="footer footer-top p-2 p-lg-5 p-md-4">
      <div class="container">
        <div class="row justify-content-between">
         <span class="ml-xl-3">{{name}}</span> 
          <button
            type="button"
            onclick="location.href='/Work';"
            class="btn btn-success"
          >{{buttonName}}</button>
        </div>
      </div>
    </div>
    <div class="footer footer-bottom bg-light">
      <div class="container">
        <div class="row copy-right justify-content-between">
          <p>{{copyright}}</p>
          <ul class="footer-links nav">
            <li class="nav-link">
              <a href="/">HOME&NonBreakingSpace;&NonBreakingSpace;</a>/
            </li>
            <li class="nav-link">
              <a href="/About">ABOUT&NonBreakingSpace;&NonBreakingSpace;</a>/
            </li>
            <li class="nav-link">
              <a href="/Work">WORK&NonBreakingSpace;&NonBreakingSpace;</a>/
            </li>
            <li class="nav-link">
              <a href="/Contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      name: "ARE YOU READY TO BE BLOWN AWAY?",
      buttonName: "CLICK HERE TO FIND OUT",
      copyright: "COPYRIGHT 2013 DISPLAY ALL RIGHTS RESERVED."
    };
  }
};
</script>


<style scoped>
footer {
  bottom: 0;
  width: 100%;
  position: absolute;
  /*height: 200px;*/
  background-color: #f5f5f5;
}

.text-muted {
  margin: 20px 0;
}
.footer-top {
  background-color: #322f2f;
  font-family: "Novecentosan", Arial, sans-serif;
  font-size: 24px;
  color: #efefef;
}

button {
  padding: auto;
  font-size: 14px;
  border-radius: 0px;
  background: #2ecc71;
}
.copy-right p{
  margin-left: 15px;
}
.footer-bottom {
  font-family: "Novecentosan", Arial, sans-serif;
  font-size: 12px;
  color: #a5a5a5;
  padding: 10px;
  padding-top: 18px;
}
.footer-bottom a {
  text-decoration: none;
  color: #a5a5a5;
}
li {
  padding: 2px;
}
/*media for footer*/


@media (max-width: 425px) {
  footer {
    text-align: center;
  }

  .row span{
    font-size: 13px;
    padding: 16px;
  }
  .copy-right p {
    margin: 0px auto;
    font-size: 10px;
    text-align: center;
  }
  .copy-right ul {
    margin: 0px auto;
  }
  .footer .row {
    margin: 0px auto;
    font-size: 9px;
  }
  
  .footer-bottom {
    padding: 5px;
  }
  .btn {
    margin: auto;
    font-size: 6px;
  }
}
@media(max-width: 375px){
  .row span{
    padding: 8px;
    padding-left: 50px;
  }
}
@media (max-width: 320px) {
  .row {
    margin: 0 -15px;
  }
  .row span{
    margin-left: 10px;
    padding: 5px;
    text-align: center;
  }
}
</style>
