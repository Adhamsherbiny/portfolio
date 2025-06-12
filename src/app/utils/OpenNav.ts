function openNavigation(){
    const navigation = document.getElementById('navigation')!;
    if(navigation.style.height === '100vh'){
        navigation.style.height = '75px';
    }else{
        navigation.style.height = '100vh';
    }
}

export default openNavigation