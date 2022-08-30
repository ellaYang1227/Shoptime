// 載入共用 header
$("#js-header").load("components/header.html", (responseTxt, statusTxt, xhr) => {
    // 載入成功後 加入 all.min.js
    if(statusTxt == "success"){
        const script = document.createElement("script");
        script.src = "build/all.min.js";
        $("body").append(script);
    }
});
