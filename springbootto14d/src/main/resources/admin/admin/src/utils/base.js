const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootto14d/",
            name: "springbootto14d",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "大健康养老公寓管理系统"
        } 
    }
}
export default base
