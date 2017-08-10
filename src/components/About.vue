<template>
  <section id="about" class="vertical-scrolling">
    <div class="container">
      <div class="row">
        <div class="col m3"></div>
        <div class="col m6">
          <h2 class="section-title">About</h2>
          <p>I'm a self taught web designer, developer.
            <br> I'm currently part of a small web development team in a upcoming start-up, building web and mobile applications.
            <br> My passion is to use technology based solutions, to help solve real world challenges.
            <br> Competences: Languages and Frameworks: Javascript, HTML5, CSS3, jQuery, Bootstrap3.
            <br> Tools & expertise: Git, Responsive Web Design, Agile Methodologies.</p>
        </div>
        <div class="col m3"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
.section-title {
  color: #FFDC72;
  font-weight: 500;
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
</style>
