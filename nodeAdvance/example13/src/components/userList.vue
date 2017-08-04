<template>
  <div class="container">
    <div class="row yhgl">
      <div class="col-md-8">用户管理</div>
      <div class="col-md-4 text-right">
        <router-link to="/userAdd" class="btn btn-success" data-toggle="modal" data-target="#myModal">添加用户</router-link>
      </div>
    </div>
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userList">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.sex }}</td>
            <td>{{ user.age }}</td>
            <td>
              <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>&nbsp;&nbsp;<router-link :to="{path:'/userAdd',query:{_id:user._id}}" data-toggle="modal" data-target="#myModal">编辑</router-link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>&nbsp;&nbsp;<a href="#" @click="userDelete(user._id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>      
    </div>
    <div class="row">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.getUserList()
    },
    data() {
      return {
        userList: [],
        user: {}
      }
    },
    watch: {
      '$route': 'getUserList'
    },
    methods: {
      getUserList() {
        this.$http.get('/api/find').then(res => {
          this.userList = res.data
        }).catch(err => {
          console.log(err)
        })
      },
      userDelete(userId) {
        if (confirm('确定要删除该数据吗？')) {
          this.$http.post('/api/delete', {
            _id: userId
          }).then(res => {
            console.log(res)
            this.$router.push('/userList')
          }).catch(err => {
            alert('删除数据失败！')
            console.log(err)
          })
        }
      }
    }
  }

</script>

<style scoped>
  .yhgl {
    height: 60px;
    line-height: 60px;
    font-size: 26px;
  }

</style>
