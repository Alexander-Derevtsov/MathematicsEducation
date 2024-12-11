const change = document.getElementById("change")

function change_all(){
if (document.getElementsByTagName('div')[3].innerText==='Derevtsov'){
    document.body.style.backgroundImage="url('passport_shablon.jpg')"
    document.getElementsByTagName('div')[3].innerText='Деревцов';
    document.getElementsByTagName('div')[4].innerText='Александр';
    document.getElementsByTagName('div')[5].innerText='Алексеевич';
    document.getElementsByTagName('div')[6].innerText='муж';
    document.getElementsByTagName('div')[8].innerText='гор. Чита';
    document.getElementsByTagName('div')[0].innerText='УМВД РОССИИ ПО ЗАБАЙКАЛЬСКОМУ КРАЮ';
    document.getElementsByTagName('div')[1].innerText='01.01.2019';
    document.getElementsByTagName('div')[2].innerText='715-720';
    document.getElementsByTagName('div')[3].style.marginTop='195px';
    document.getElementsByTagName('div')[4].style.marginTop='35px';
    document.getElementsByTagName('div')[6].style.marginTop='8px';
    document.getElementsByTagName('div')[8].style.marginTop='8px';
    document.getElementsByTagName('div')[8].style.marginLeft='180px';
    document.getElementsByTagName('div')[7].innerText='2004';
    document.getElementsByTagName('div')[9].style.marginTop='-90px'
    document.getElementsByTagName('div')[9].style.marginLeft='20px';
    return;
    }
else
if (document.getElementsByTagName('div')[3].innerText==='Деревцов')
{
    document.body.style.backgroundImage="url('interpasport.jpg')";
    document.getElementsByTagName('div')[3].innerText='Derevtsov';
    document.getElementsByTagName('div')[4].innerText='Alexander';
    document.getElementsByTagName('div')[5].innerText='Alekseevich';
    document.getElementsByTagName('div')[6].innerText='male';
    document.getElementsByTagName('div')[8].innerText='Chita';
    document.getElementsByTagName('div')[0].innerText='';
    document.getElementsByTagName('div')[1].innerText='';
    document.getElementsByTagName('div')[2].innerText='';
    document.getElementsByTagName('div')[3].style.marginTop='325px';
    document.getElementsByTagName('div')[4].style.marginTop='18px';
    document.getElementsByTagName('div')[6].style.marginTop='40px';
    document.getElementsByTagName('div')[8].style.marginTop='-20px';
    document.getElementsByTagName('div')[8].style.marginLeft='310px';
    document.getElementsByTagName('div')[7].innerText='';
    document.getElementsByTagName('div')[9].style.marginTop='-100px';
    document.getElementsByTagName('div')[9].style.marginLeft='7px';

    return;

}
}
change.addEventListener("click",change_all)


