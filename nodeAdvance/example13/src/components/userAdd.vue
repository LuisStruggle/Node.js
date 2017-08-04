<template>
<!-- 定制用户添加，编辑的弹出框 -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
        <h4 class="modal-title">用户添加</h4>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" id="userAdd">
          <div class="form-group">
            <label for="name" class="col-sm-2 control-label">姓名</label>
            <div class="col-sm-10">
              <input type="text" name="name" class="form-control" id="name" placeholder="姓名" v-model="user.name">
            </div>
          </div>
          <div class="form-group">
            <label for="sex" class="col-sm-2 control-label">性别</label>
            <div class="col-sm-10">
              <input type="text" name="sex" class="form-control" id="sex" placeholder="性别" v-model="user.sex">
            </div>
          </div>
          <div class="form-group">
            <label for="age" class="col-sm-2 control-label">年龄</label>
            <div class="col-sm-10">
              <input type="number" name="age" class="form-control" id="age" placeholder="年龄" v-model="user.age">
            </div>
          </div>
        </form>
        
        <!-- 错误信息提示栏 -->
        <div class="alert alert-warning alert-dismissible hidden" role="alert" id="errorMessage">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary" @click="userAdd">保存</button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
</template>

<script>
  export default {
    created() {
      this.getUser()
    },
    name: 'userAdd',
    data() {
      return {
        user: {}
      }
    },
    watch: {
      '$route': 'getUser'
    },
    methods: {
      userAdd() {
        var data = $('#userAdd').serialize()
        var _id = this.$route.query._id
        if (_id !== undefined) { // 编辑
          data += '&_id=' + _id
          this.$http.post('/api/update', data).then(res => {
            $('#myModal').modal('hide')
            this.$router.push('/userList')
          }).catch(err => {
            console.log(err)
            $('#errorMessage').removeClass('hidden')
          })
        } else { // 新增
          this.$http.post('/api/insert', data).then(res => {
            $('#myModal').modal('hide')
            this.$router.push('/userList')
          }).catch(err => {
            console.log(err)
            $('#errorMessage').removeClass('hidden')
          })
        }
      },
      getUser() {
        var _id = this.$route.query._id
        if (_id !== undefined) {
          $('#myModal .modal-title').text('用户编辑')
          this.$http.post('/api/findSingle', {
            _id: _id
          }).then(res => {
            this.user = res.data
          }).catch(err => {
            console.log(err)
          })
        } else {
          $('#myModal .modal-title').text('用户添加')
          this.user = {}
        }
      }
    }
  }

</script>
