<template>
  <div id="login">
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
      </form>
    </div> <!-- /container -->
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {

      }
    },
    methods: {

    }
  }

</script>

<style scoped>
  #login {
    width: 100%;
    height: 100%;
    position: absolute;
    padding-top: 80px;
    background-image: url("../assets/bjtp.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .form-signin {
    max-width: 330px;
    padding: 30px;
    margin: 0 auto;
    background: #fff;
    opacity: 0.8;
    -moz-opacity: 0.8;
    filter: "alpha(opacity=80)";
    -ms-filter: "alpha(opacity=80)";
  }
  
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  
  .form-signin .checkbox {
    font-weight: normal;
  }
  
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  
  .form-signin .form-control:focus {
    z-index: 2;
  }

</style>
