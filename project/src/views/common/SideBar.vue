<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#fff"
      text-color="#000"
      active-text-color="#0000ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"

              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
              >{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from './bus';
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-s-home',
          index: 'homepage',
          title: '系统首页'
        },
        {
          icon: 'el-icon-search',
          index: 'infSearch',
          title: '信息查询',
          subs:[
            {
              index: 'employeeSearch',
              title: '员工查询'
            },
            {
              index: 'personnelSearch',
              title: '人才查询'
            },
          ]
        },
        {
          icon: 'el-icon-document-add',
          index: 'informationEntry',
          title: '信息录入',
          subs:[
            {
              index:'employeeFile',
              title:'员工档案'
            },
            {
              index:'employeeComments',
              title:'员工评价'
            },
          ]
        },
        {
          icon: 'el-icon-s-custom',
          index: 'infCheak',
          title: '信息审核',
          subs:[

            // {
            //   index: 'minfordSinPara',
            //   title: '管汇单参数分析'
            // },
          ]
        },
        // {
        //   icon: 'el-icon-s-help',
        //   title: '多参数分析',
        //   subs:[
        //     {
        //       index: 'wellMultiPara',
        //       title: '油井多参数分析'
        //     },
        //     {
        //       index: 'pipMultiPara',
        //       title: '管线多参数分析'
        //     },
        //     {
        //       index: 'minfordMultiPara',
        //       title: '管汇多参数分析'
        //     },
        //   ]
        // },
        // {
        //   icon: 'el-icon-lx-global',
        //   index: 'i18n',
        //   title: '正常工况'
        // },
        // {
        //   icon: 'el-icon-rank',
        //   index: '6',
        //   title: '异常工况',
        //   subs: [
        //     {
        //       index: 'typical',
        //       title: '典型设备'
        //     },
        //     {
        //       index: 'identity',
        //       title: '工况识别'
        //     },
        //     {
        //       index: 'analysis',
        //       title: '致因分析'
        //     }
        //   ]
        // },
        // {
        //   icon: 'el-icon-s-goods',
        //   index: 'dataManage',
        //   title: '数据管理'
        // },
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
      bus.$emit('collapse-content', msg);
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
