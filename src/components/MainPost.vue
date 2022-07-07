<template>
  <div>
    <div class="main_title">
      <h2>오늘 할 일</h2>
    </div>
    <div class="content">
      <p>내용</p>
    </div>
    <div class="post">
      <div class="post_menu">
        <p>예정시간</p>
        <p>일정완료</p>
      </div>
      <PostMenu></PostMenu>
      <div class="add_post" v-if="add_open == true">
        <form @submit.prevent="add_post">
          <h4>오늘의 할일</h4>
          <input type="text" v-model="post_content" class="add_content" placeholder="할일을 입력해주세요">
          <h5>예정 시각</h5>
          <input type="time" name="" id="" v-model="post_time" class="add_time">
          <button type="submit" class="submit_btn">등록하기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { addPost } from '@/api/index.js'
import PostMenu from '@/components/PostMenu.vue'
import store from '../store'
export default {
  data() {
    return {
      post_content: '',
      post_time: '',
      add_open: true,
      posts: {}
    }
  },
  components: {
    PostMenu
  },
  methods: {
    async add_post() {
      const postsData = {
        post_content: this.post_content,
        post_time: this.post_time,
        user_id: store.state.user_id
      }
      const { data } = await addPost(postsData)
      console.log(data)
      this.initForm()
    },
    initForm() {
      this.post_content = ''
      this.post_time = ''
      this.add_open = false
    }
  }
}
</script>

<style scoped>
.content {
  height: 127px;
  margin: 32px 0;
}

#app .add_post {
  width: 90%;
  position: relative;
  left: 5%;
  background: #fff;
  box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 10%);
  height: 310px;
  padding: 10px 20px 0;

}

.add_post .add_content {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  text-align: left;
  padding-left: 10px;
  height: 45px;
  outline: none;
}

.add_post h4 {
  font-size: 25px;
  margin-bottom: 15px;
}

.add_post h5 {
  font-size: 20px;
  margin-top: 20px;
  text-align: left;
  padding-left: 10px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  height: 40px;
  margin-bottom: 10px;
}

.add_post .add_time {
  border: none;
  width: 100%;
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
  height: 40px;
  margin-bottom: 25px;
  font-weight: bold;
  outline: none;
  border-bottom: 1px solid #ccc;
}

.submit_btn {
  width: 100%;
  height: 40px;
  background: #5DB075;
  border-radius: 28px;
  border: 0;
  color: #fff;
  font-size: 18px;
}
</style>
