<template>
	<div class="main-content">
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"width":"10%","padding":"0 20px","margin":"0 0 20px 0","background":"#fff"}' :inline="true" :model="searchForm">
				<el-row :style='{"alignItems":"center","flexDirection":"column","display":"flex"}' >
					<div :style='{"width":"100%","margin":"0","flexDirection":"column","display":"flex"}'>
						<label :style='{"margin":"0 10px 0 0","color":"#000","textAlign":"center","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">护工姓名</label>
						<el-input v-model="searchForm.hugongxingming" placeholder="护工姓名" clearable></el-input>
					</div>
					<div :style='{"width":"100%","margin":"0","flexDirection":"column","display":"flex"}'>
						<label :style='{"margin":"0 10px 0 0","color":"#000","textAlign":"center","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">用户姓名</label>
						<el-input v-model="searchForm.yonghuxingming" placeholder="用户姓名" clearable></el-input>
					</div>
					<el-button :style='{"border":"1px solid ","cursor":"pointer","padding":"0 24px","outline":"none","margin":"10px 0 0","color":"#857EF0","borderRadius":"4px","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"100%","fontSize":"14px","height":"40px"}' type="success" @click="search()">查询</el-button>
				</el-row>

				<el-row :style='{"margin":"20px 0","alignItems":"center","flexDirection":"column","display":"flex"}'>
					<el-button :style='{"border":"1px solid ","cursor":"pointer","padding":"0 24px","margin":"0 0 6px","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"100%","fontSize":"14px","height":"40px"}' v-if="isAuth('ruzhuxinxi','新增')" type="success" @click="addOrUpdateHandler()">新增</el-button>
					<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 0 6px","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"100%","fontSize":"14px","height":"40px"}' v-if="isAuth('ruzhuxinxi','删除')" :disabled="dataListSelections.length <= 0" type="danger" @click="deleteHandler()">删除</el-button>




				</el-row>
			</el-form>
			
			<!-- <div> -->
				<el-table class="tables"
					:stripe='false'
					:style='{"padding":"0","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3020)","borderColor":"#eee","borderWidth":"1px 0 0 1px","background":"#fff","width":"90%","borderStyle":"solid","height":"fit-content"}' 
					v-if="isAuth('ruzhuxinxi','查看')"
					:data="dataList"
					v-loading="dataListLoading"
				@selection-change="selectionChangeHandler">
					<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
					<el-table-column :resizable='true' :sortable='false' label="索引" type="index" width="50" />
					<el-table-column :resizable='true' :sortable='false'  
						prop="ruzhubianhao"
					label="入住编号">
						<template slot-scope="scope">
							{{scope.row.ruzhubianhao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="fangjianmingcheng"
					label="房间名称">
						<template slot-scope="scope">
							{{scope.row.fangjianmingcheng}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="fangjianleixing"
					label="房间类型">
						<template slot-scope="scope">
							{{scope.row.fangjianleixing}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="fangjianweizhi"
					label="房间位置">
						<template slot-scope="scope">
							{{scope.row.fangjianweizhi}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="hugongzhanghao"
					label="护工账号">
						<template slot-scope="scope">
							{{scope.row.hugongzhanghao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="hugongxingming"
					label="护工姓名">
						<template slot-scope="scope">
							{{scope.row.hugongxingming}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="yonghuzhanghao"
					label="用户账号">
						<template slot-scope="scope">
							{{scope.row.yonghuzhanghao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="yonghuxingming"
					label="用户姓名">
						<template slot-scope="scope">
							{{scope.row.yonghuxingming}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="xingbie"
					label="性别">
						<template slot-scope="scope">
							{{scope.row.xingbie}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="nianling"
					label="年龄">
						<template slot-scope="scope">
							{{scope.row.nianling}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="chuangweihao"
					label="床位号">
						<template slot-scope="scope">
							{{scope.row.chuangweihao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="biaoti"
					label="标题">
						<template slot-scope="scope">
							{{scope.row.biaoti}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="shoufeijiage"
					label="收费价格">
						<template slot-scope="scope">
							{{scope.row.shoufeijiage}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false' prop="ispay" label="是否支付">
						<template slot-scope="scope">
							<span style="margin-right:10px">{{scope.row.ispay=='已支付'?'已支付':'未支付'}}</span>
							<el-button v-if="scope.row.ispay!='已支付' && isAuth('ruzhuxinxi','支付') " type="text" size="small" @click="payHandler(scope.row)">支付</el-button>
						</template>
					</el-table-column>
					<el-table-column width="300" label="操作">
						<template slot-scope="scope">
							<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 10px 6px 0","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('ruzhuxinxi','查看')" type="success" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">详情</el-button>
							<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 10px 6px 0","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('ruzhuxinxi','请假')" type="success" size="mini" @click="qingjiaxinxiCrossAddOrUpdateHandler(scope.row,'cross','','','')">请假</el-button>
							<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 10px 6px 0","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('ruzhuxinxi','提醒')" type="success" size="mini" @click="tixingxinxiCrossAddOrUpdateHandler(scope.row,'cross','','','')">提醒</el-button>
							<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 10px 6px 0","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('ruzhuxinxi','续住')" type="success" size="mini" @click="xuzhuxinxiCrossAddOrUpdateHandler(scope.row,'cross','','','')">续住</el-button>
							<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 10px 6px 0","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('ruzhuxinxi','护理')" type="success" size="mini" @click="hulixinxiCrossAddOrUpdateHandler(scope.row,'cross','','','')">护理</el-button>
							<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 10px 6px 0","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('ruzhuxinxi','退住')" type="success" size="mini" @click="tuizhuxinxiCrossAddOrUpdateHandler(scope.row,'cross','','','')">退住</el-button>
							<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 10px 6px 0","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('ruzhuxinxi','修改')" type="primary" size="mini" @click="addOrUpdateHandler(scope.row.id)">修改</el-button>





							<el-button :style='{"border":"1px solid","cursor":"pointer","padding":"0 24px","margin":"0 10px 6px 0","outline":"none","color":"#857EF0","borderRadius":"0","background":"#fff","borderImage":"linear-gradient(180deg, rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 1), rgba(133.00000727176666, 126.00000008940697, 240.00000089406967, 0.10000000149011612)) 1 1","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('ruzhuxinxi','删除') " type="danger" size="mini" @click="deleteHandler(scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination
					@size-change="sizeChangeHandle"
					@current-change="currentChangeHandle"
					:current-page="pageIndex"
					background
					:page-sizes="[10, 20, 30, 50]"
					:page-size="pageSize"
					:layout="layouts.join()"
					:total="totalPage"
					prev-text="<"
					next-text=">"
					:hide-on-single-page="false"
					:style='{"width":"100%","padding":"0","margin":"20px 0 0","whiteSpace":"nowrap","color":"#333","fontWeight":"500"}'
				></el-pagination>
			<!-- </div> -->
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>

		<qingjiaxinxi-cross-add-or-update v-if="qingjiaxinxiCrossAddOrUpdateFlag" :parent="this" ref="qingjiaxinxiCrossaddOrUpdate"></qingjiaxinxi-cross-add-or-update>
		<tixingxinxi-cross-add-or-update v-if="tixingxinxiCrossAddOrUpdateFlag" :parent="this" ref="tixingxinxiCrossaddOrUpdate"></tixingxinxi-cross-add-or-update>
		<xuzhuxinxi-cross-add-or-update v-if="xuzhuxinxiCrossAddOrUpdateFlag" :parent="this" ref="xuzhuxinxiCrossaddOrUpdate"></xuzhuxinxi-cross-add-or-update>
		<hulixinxi-cross-add-or-update v-if="hulixinxiCrossAddOrUpdateFlag" :parent="this" ref="hulixinxiCrossaddOrUpdate"></hulixinxi-cross-add-or-update>
		<tuizhuxinxi-cross-add-or-update v-if="tuizhuxinxiCrossAddOrUpdateFlag" :parent="this" ref="tuizhuxinxiCrossaddOrUpdate"></tuizhuxinxi-cross-add-or-update>




	</div>
</template>

<script>
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
import qingjiaxinxiCrossAddOrUpdate from "../qingjiaxinxi/add-or-update";
import tixingxinxiCrossAddOrUpdate from "../tixingxinxi/add-or-update";
import xuzhuxinxiCrossAddOrUpdate from "../xuzhuxinxi/add-or-update";
import hulixinxiCrossAddOrUpdate from "../hulixinxi/add-or-update";
import tuizhuxinxiCrossAddOrUpdate from "../tuizhuxinxi/add-or-update";
export default {
  data() {
    return {
      searchForm: {
        key: ""
      },
      form:{},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: true,
      sfshVisiable: false,
      shForm: {},
      chartVisiable: false,
      chartVisiable1: false,
      chartVisiable2: false,
      chartVisiable3: false,
      chartVisiable4: false,
      chartVisiable5: false,
      addOrUpdateFlag:false,
      qingjiaxinxiCrossAddOrUpdateFlag: false,
      tixingxinxiCrossAddOrUpdateFlag: false,
      xuzhuxinxiCrossAddOrUpdateFlag: false,
      hulixinxiCrossAddOrUpdateFlag: false,
      tuizhuxinxiCrossAddOrUpdateFlag: false,
      layouts: ["total","prev","pager","next","sizes","jumper"],


    };
  },
  created() {
    this.init();
    this.getDataList();
    this.contentStyleChange()
  },
  mounted() {
  },
  filters: {
    htmlfilter: function (val) {
      return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
    }
  },
  components: {
    AddOrUpdate,
    qingjiaxinxiCrossAddOrUpdate,
    tixingxinxiCrossAddOrUpdate,
    xuzhuxinxiCrossAddOrUpdate,
    hulixinxiCrossAddOrUpdate,
    tuizhuxinxiCrossAddOrUpdate,
  },
  methods: {

    contentStyleChange() {
      this.contentPageStyleChange()
    },
    // 分页
    contentPageStyleChange(){
      let arr = []

      // if(this.contents.pageTotal) arr.push('total')
      // if(this.contents.pageSizes) arr.push('sizes')
      // if(this.contents.pagePrevNext){
      //   arr.push('prev')
      //   if(this.contents.pagePager) arr.push('pager')
      //   arr.push('next')
      // }
      // if(this.contents.pageJumper) arr.push('jumper')
      // this.layouts = arr.join()
      // this.contents.pageEachNum = 10
    },

    qingjiaxinxiCrossAddOrUpdateHandler(row,type,crossOptAudit,statusColumnName,tips,statusColumnValue){
      this.showFlag = false;
      this.addOrUpdateFlag = false;
      this.qingjiaxinxiCrossAddOrUpdateFlag = true;
      this.$storage.set('crossObj',row);
      this.$storage.set('crossTable','ruzhuxinxi');
      this.$storage.set('statusColumnName',statusColumnName);
      this.$storage.set('statusColumnValue',statusColumnValue);
      this.$storage.set('tips',tips);
	if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
		var obj = this.$storage.getObj('crossObj');
		for (var o in obj){
		  if(o==statusColumnName && obj[o]==statusColumnValue){
		    this.$message({
		      message: tips,
		      type: "success",
		      duration: 1500,
		      onClose: () => {
			this.getDataList();
		      }
		    });
		      this.showFlag = true;
		      this.qingjiaxinxiCrossAddOrUpdateFlag = false;
			return;
		  }
		}
	}
      this.$nextTick(() => {
      this.$refs.qingjiaxinxiCrossaddOrUpdate.init(row.id,type);
      });
    },
    tixingxinxiCrossAddOrUpdateHandler(row,type,crossOptAudit,statusColumnName,tips,statusColumnValue){
      this.showFlag = false;
      this.addOrUpdateFlag = false;
      this.tixingxinxiCrossAddOrUpdateFlag = true;
      this.$storage.set('crossObj',row);
      this.$storage.set('crossTable','ruzhuxinxi');
      this.$storage.set('statusColumnName',statusColumnName);
      this.$storage.set('statusColumnValue',statusColumnValue);
      this.$storage.set('tips',tips);
	if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
		var obj = this.$storage.getObj('crossObj');
		for (var o in obj){
		  if(o==statusColumnName && obj[o]==statusColumnValue){
		    this.$message({
		      message: tips,
		      type: "success",
		      duration: 1500,
		      onClose: () => {
			this.getDataList();
		      }
		    });
		      this.showFlag = true;
		      this.tixingxinxiCrossAddOrUpdateFlag = false;
			return;
		  }
		}
	}
      this.$nextTick(() => {
      this.$refs.tixingxinxiCrossaddOrUpdate.init(row.id,type);
      });
    },
    xuzhuxinxiCrossAddOrUpdateHandler(row,type,crossOptAudit,statusColumnName,tips,statusColumnValue){
      this.showFlag = false;
      this.addOrUpdateFlag = false;
      this.xuzhuxinxiCrossAddOrUpdateFlag = true;
      this.$storage.set('crossObj',row);
      this.$storage.set('crossTable','ruzhuxinxi');
      this.$storage.set('statusColumnName',statusColumnName);
      this.$storage.set('statusColumnValue',statusColumnValue);
      this.$storage.set('tips',tips);
	if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
		var obj = this.$storage.getObj('crossObj');
		for (var o in obj){
		  if(o==statusColumnName && obj[o]==statusColumnValue){
		    this.$message({
		      message: tips,
		      type: "success",
		      duration: 1500,
		      onClose: () => {
			this.getDataList();
		      }
		    });
		      this.showFlag = true;
		      this.xuzhuxinxiCrossAddOrUpdateFlag = false;
			return;
		  }
		}
	}
      this.$nextTick(() => {
      this.$refs.xuzhuxinxiCrossaddOrUpdate.init(row.id,type);
      });
    },
    hulixinxiCrossAddOrUpdateHandler(row,type,crossOptAudit,statusColumnName,tips,statusColumnValue){
      this.showFlag = false;
      this.addOrUpdateFlag = false;
      this.hulixinxiCrossAddOrUpdateFlag = true;
      this.$storage.set('crossObj',row);
      this.$storage.set('crossTable','ruzhuxinxi');
      this.$storage.set('statusColumnName',statusColumnName);
      this.$storage.set('statusColumnValue',statusColumnValue);
      this.$storage.set('tips',tips);
	if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
		var obj = this.$storage.getObj('crossObj');
		for (var o in obj){
		  if(o==statusColumnName && obj[o]==statusColumnValue){
		    this.$message({
		      message: tips,
		      type: "success",
		      duration: 1500,
		      onClose: () => {
			this.getDataList();
		      }
		    });
		      this.showFlag = true;
		      this.hulixinxiCrossAddOrUpdateFlag = false;
			return;
		  }
		}
	}
      this.$nextTick(() => {
      this.$refs.hulixinxiCrossaddOrUpdate.init(row.id,type);
      });
    },
    tuizhuxinxiCrossAddOrUpdateHandler(row,type,crossOptAudit,statusColumnName,tips,statusColumnValue){
      this.showFlag = false;
      this.addOrUpdateFlag = false;
      this.tuizhuxinxiCrossAddOrUpdateFlag = true;
      this.$storage.set('crossObj',row);
      this.$storage.set('crossTable','ruzhuxinxi');
      this.$storage.set('statusColumnName',statusColumnName);
      this.$storage.set('statusColumnValue',statusColumnValue);
      this.$storage.set('tips',tips);
	if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
		var obj = this.$storage.getObj('crossObj');
		for (var o in obj){
		  if(o==statusColumnName && obj[o]==statusColumnValue){
		    this.$message({
		      message: tips,
		      type: "success",
		      duration: 1500,
		      onClose: () => {
			this.getDataList();
		      }
		    });
		      this.showFlag = true;
		      this.tuizhuxinxiCrossAddOrUpdateFlag = false;
			return;
		  }
		}
	}
      this.$nextTick(() => {
      this.$refs.tuizhuxinxiCrossaddOrUpdate.init(row.id,type);
      });
    },
    payHandler(row){
      this.$storage.set('paytable','ruzhuxinxi');
      this.$storage.set('payObject',row);
      this.$router.push('pay');
    },







    init () {
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
        order: 'desc',
      }
           if(this.searchForm.hugongxingming!='' && this.searchForm.hugongxingming!=undefined){
            params['hugongxingming'] = '%' + this.searchForm.hugongxingming + '%'
          }
           if(this.searchForm.yonghuxingming!='' && this.searchForm.yonghuxingming!=undefined){
            params['yonghuxingming'] = '%' + this.searchForm.yonghuxingming + '%'
          }
      this.$http({
        url: "ruzhuxinxi/page",
        method: "get",
        params: params
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 删除
    deleteHandler(id) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "ruzhuxinxi/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.search();
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },


  }

};
</script>
<style lang="scss" scoped>
	
	.center-form-pv {
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	.el-input {
	  width: auto;
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 1px solid #857EF0;
				border-radius: 4px;
				padding: 0 12px;
				box-shadow: 0px 4px 0px 0px #8A70FF;
				outline: none;
				color: #000;
				width: 100%;
				font-size: 14px;
				height: 40px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 1px solid #857EF0;
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: 0px 4px 0px 0px #8A70FF;
				outline: none;
				color: #000;
				width: 100%;
				font-size: 14px;
				height: 40px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 1px solid #8A70FF;
				border-radius: 4px;
				padding: 0 10px 0 30px;
				box-shadow: 0px 4px 0px 0px #8A70FF;
				outline: none;
				color: #000;
				width: 100%;
				font-size: 14px;
				height: 40px;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: #999;
				font-weight: 500;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: #857EF0;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 12px 0;
				color: #fff;
				background: transparent;
				border-color: #eee;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}

	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				word-break: break-all;
				white-space: normal;
				font-weight: bold;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}

	
	.el-table /deep/ .el-table__body-wrapper tbody {
				width: 100%;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: #fff;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 12px 0;
				color: #999;
				background: #fff;
				border-color: #6F6F97;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}
	
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 12px 0;
				color: #000;
				background: rgba(133, 126, 240, 0.3);
				border-color: #6F6F97;
				border-width: 0 1px 1px 0;
				border-style: solid;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 12px 0;
				color: #999;
				background: #fff;
				border-color: #6F6F97;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #666;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}

	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}

	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #666;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #857EF0;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #FFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #857EF0;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #606266;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #606266;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 3px;
				color: #606266;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
</style>
