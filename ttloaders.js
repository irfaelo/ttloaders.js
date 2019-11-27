//
// >>>>> TTLOADERS <<<<<
//
// (c) Ignacio Ramos 2019
// -----------------------------------
// indianayourself.com
var TTcomps = [];
var TTival = {};
ELEMENT_TT = 'tt'; 
var ival_tt  = 0;
//function TTcomp(v){ return $( '[data-c="'+v+'"]' );} 
 
//define for TT tags 
    $(ELEMENT_TT).each( function( index ){
        T=$(this);

        //1ST VARS DEF
        let c       = T.data('c');
        let param   = '';
        let pag     = null;
        let refresh = null;
        let js      = null;
        let part    = T.data('part')==N ? '' : T.data('part');

        //DEF
        data = T.data(); 

        //LOOPS
        for(var key in data) { 
            if(key.startsWith("get")){   param+=key.toLowerCase().substr(3)+'='+data[key]+'&';   } 
            if(key.startsWith("page")){  pag = data[key];   } 
            if(key.startsWith("refresh")){ refresh = data[key];   } 
            if(key.startsWith("js")){ js = data[key];   } 
        } 
        pag     = (pag==null) ? TTcomps[c] : pag; 

        //RUN 
        if(refresh!=N) {
            $('tt').eq(index).load(pag+' '+part, param , function(data){ 
                tx = (data); 
                if(tx.includes('<script>'))
                {   
                    F = new Function( tx.split('<scr'+'ipt>')[1].split('</scr'+'ipt>')[0] ); 
                    F(); 
                } 
            } ) ;
            setInterval(function(){     $('tt').eq(index).load(pag+' '+part, param , null );   }, refresh)
        }
        else{ 
             T.load(pag+' '+part, param , function(data){ 
                tx = (data);  
                if(tx.includes('<script>'))
                {   
                    F = new Function( tx.split('<scr'+'ipt>')[1].split('</scr'+'ipt>')[0] ); 
                    F(); 
                }  
            } ) ; 
        }
    })   
    // :D
