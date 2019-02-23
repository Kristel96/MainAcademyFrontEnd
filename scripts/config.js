requirejs.config({
    baseURL:'scripts',
    paths:{
        jquery:'libs/jquery-3.3.1',
        mymethods:'myScripts/myMethods'
    }
});
requirejs(["myScripts/myJs"]);