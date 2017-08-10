<template>
  <section id="contact" class="vertical-scrolling">
    <div class="container">
      <div class="row">
        <div class="col m12">
          <h2 class="section-title text-center">Contact</h2>
        </div>
      </div>
      <div class="row">
        <div class="col m12 text-center social-space">
          <a class="btn-floating white"><i class="fa fa-facebook facebook"></i> Facebook</a>
          <a class="btn-floating white"><i class="fa fa-twitter twitter"></i> Twitter</a>
          <a class="btn-floating white"><i class="fa fa-github github"></i> Github</a>
          <a class="btn-floating white"><i class="fa fa-google-plus googleplus"></i> Google+</a>
          <a class="btn-floating white"><i class="fa fa-linkedin linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.section-title {
  color: #FFDC72;
  font-weight: 500;
}

/* Margin And Padding Styles */

.martop10 {
	margin-top:10px;
}

.martop30 {
	margin-top:30px;
}

.marbot15 {
	margin-bottom:15px;
}

.marbot30 {
	margin-bottom:30px;
}

.martop60 {
	margin-top:60px;
}

.padding-12-per {
	padding:0px 12%;
}

.padding-right-15per {
	padding-right:15%;
}

.padding-right-20per {
	padding-right:25%;
}

.pad-20-tb {
	padding:20px 0;
}

.padding-25-per {
	padding:0px 25%;
}

/* // Margin And Padding Styles */


.social-icons a {
	padding: 0 10px;
}

.social-space a {
	margin-right: 8px;
}

.social-space i {
	font-size: 20px;
}

.social-space i:hover {
	text-shadow: 1px 1px 0px rgba(0,0,0,.3);
}

.social-space i:first-child {
	padding-left: 0;
}


.social-space .facebook {
	color: #6078aa;
}

.social-space .twitter {
	color: #00acee;
}

.social-space .youtube {
	color: #cd332d;
}

.social-space .pinterest {
	color: #bd2126;
}

.social-space .googleplus {
	color: #bd2126;
}

.social-space .instagram {
	color: #bb9679;
}

.social-space .github {
	color: #000000;
}

.social-space .linkedin {
	color: #0177B5;
}

.contact-title {
  font-weight: 300;
}

.hr-line {
    height: 1px;
    position: relative;
    width: 28%;
    top: 0%;
    left: 50%;
    transform: translateX(-50%) translateY(-0%);
    -webkit-transform: translateX(-50%) translateY(-0%);
    -moz-transform: translateX(-50%) translateY(-0%);
    -ms-transform: translateX(-50%) translateY(-0%);
    margin: 30px 0;
}

.hr-line i {
    position: relative;
    top: -25px;
    font-size: 32px;
    color: #fc4225;
}

input:focus, .materialize-textarea:focus {
    border-bottom: 1px solid #eb1a21 !important;
    box-shadow: 0 1px 0 0 #eb1a21 !important;
}

.input-field label.active {
    color: #eb1a21;
}
</style>
