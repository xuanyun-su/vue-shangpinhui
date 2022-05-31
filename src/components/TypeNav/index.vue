<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all" >全部商品分类</h2>
        <!-- 三级联动 -->
       <transition name="sort" >
          <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item bo"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categroyName="c1.categoryName"
                  :data-category1Id="c1.category1Id"
                  >{{ c1.categoryName }}</a
                >
                <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
              </h3>
              <!-- 二级，三级分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categroyName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                      <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          :data-categroyName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                        <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
       </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 最好的引用方式 按需引入
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      // 存储用户鼠标移动到哪一个一级分类
      currentIndex: -1,
      show:true
    };
  },
  // 组件挂载完毕，可以向服务器发请求
  mounted() {

    // 当组件加载完毕 让show属性变为false
    // 如果不是Home路由组件 将typeNav进行隐藏
    if(this.$route.path!=="/home"){
        this.show = false
    }
    
  },
  computed: {
    ...mapState({
      // 右侧需要的是一个函数 当使用这个计算属性的时候 右侧函数会立即执行以此
      // 注入一个参数state 其实即为大仓库中的数据
      categoryList: (state) => state.home.categoryList.slice(0, 16),
    }),
  },
  methods: {
    // 鼠标进入修改响应式数据cuurentIndex的属性
    // index 鼠标以上某一个一级分类的元素属性值
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveShow() {
      // 鼠标移出currentIndex 变为-1
      this.currentIndex = -1;
      if(this.$route.path != '/home'){
        this.show = false;
      }
  
    },
    goSearch(event) {
      // 最好的解决方案 编程式导航 + 事件的委派
      // 利用事件的委派存在的问题 ：1. 点击的一定是a标签？ 2. 如何获取参数[1,2,3级分类的id和参数]

      // 第一个问题 把子节点的当中a标签 加上自定义属性data-categoryName,其余的子节点是没有的
      let element = event.target;
      console.log(element)
      // 获取当前触发这个事件的节点【h3\a\dt\d1】需要有data-categoryName这样节点【一定是a标签】
      //节点有一个属性dataset属性，可以获取节点自定义属性与属性值
      let { categroyname, categroy1id, categroy2id, categroy3id } =
        element.dataset;
        console.log(element.dataset)
      // 如果标签身上拥有categoryname一定是a标签
      if (categroyname) {
        // 整理路由体哦啊转的参数
        let query = { categroyName: categroyname };
        // 一级分类，二级分类，三级分类
        if (categroy1id) {
          query.categroy1Id = categroy1id;
        } else if (categroy2id) {
          query.categroy2Id = categroy2id;
        } else {
          query.categroy3Id = categroy3id;
        }
      // 整理完参数
     let location = { name: "search" };
     location.query = query;
      // 路由跳转
      // 判断 如果路由跳转的时候带有params参数 消息要传递过去
      if(this.$route.params){
        location.params = this.$route.params;
      }
      this.$router.push(location)
      }
    },
    // 当鼠标移入的时候 让商品分类列表进行展示
    enterShow(){
      if(this.$route.path != '/home'){
        this.show = true;
      }
    }
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background: skyblue;
        }
      }
    }
  // 过度动画的样式
  // 过度动画开始状态
  // .sort-enter{
  //     height: 0;
  //     transform: rotate(0deg)
  // }
  // .sort-enter-to{
  //     height: 461px;
  //     transform: rotate(360deg);
  // }

  .sort-enter-active{
    transition: all .5s linear;
  }
  }
}
</style>