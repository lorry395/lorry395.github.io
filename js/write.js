

window.onload=function(){

    //markdown
    function Editor(input, preview) {
        this.update = function () {
          preview.innerHTML = markdown.toHTML(input.value);
          //console.log(input.value); //测试input.valule的内容
        };
        input.editor = this;
        this.update();
      }
      var $ = function (id) { return document.getElementById(id); };
      new Editor($("text-input"), $("preview"));

    //submit  //拼href传值
    var submit_btn=$("submit-btn");
    submit_btn.onclick = function(){

        var oTitle_input = document.getElementById("title-input");  
        var oTitle_input_text = oTitle_input.value;     //文章标题内容

        var oArticle_type = document.getElementById('article_type');
        var oArticle_type_index = oArticle_type.selectedIndex; //序号，取当前选中选项的序号
        var oArticle_type_value = oArticle_type.options[oArticle_type_index].value;

        var oPerson_class = document.getElementById('person_class');
        var oPerson_class_index = oPerson_class.selectedIndex;
        var oPerson_class_value = oPerson_class.options[oPerson_class_index].value;

        var oBlog_class = document.getElementById('blog_class');
        var oBlog_class_index = oBlog_class.selectedIndex;
        var oBlog_class_value = oBlog_class.options[oBlog_class_index].value;


        //判断如果没选就不提交
        if(oTitle_input_text!=null&&oTitle_input_text!=""){
            if(oArticle_type_index!=0&&oPerson_class_index!=0&&oBlog_class_index!=0){
                //var contenttext=$("text-input").value;//获取文章内容
                var input_form = document.getElementById("content-form");
                    alert(input_form.action);
                //if(contenttext!="Use **MarkDown** syntax here to write."){
                location.href="insertPost_servlet?flag=insertPost"
                                +"&title="+oTitle_input_text
                              //  +"&content"+contenttext
                                +"&article_type="+oArticle_type_value
                                +"&person_class="+oPerson_class_value
                                +"&blog_class="+oBlog_class_value;
                           // }
                           // else{
                           //     alert("检测到您未改变文章初始化内容！");
                           // }
            }
            else
            {
                alert("您还有选项未选择!");
            }
        }
        else
        {
            alert("请输入标题!");
            }
    }


    setInterval(function(){
        var date=new Date;
        if(date.getMinutes()%2==0){
            document.body.style.background="url(../images/bg_index.jpg)";
            document.body.style.backgroundPosition="50% 50%";  
            document.body.style.backgroundRepeat="no-repeat";  
            document.body.style.backgroundAttachment="fixed";  
            document.body.style.backgroundSize="cover";
        }
        else{
            document.body.style.background="url(../images/机器人.jpg)";
            document.body.style.backgroundPosition="50% 50%";  
            document.body.style.backgroundRepeat="no-repeat";  
            document.body.style.backgroundAttachment="fixed";  
            document.body.style.backgroundSize="cover";
        }            
    },1000);
    
}