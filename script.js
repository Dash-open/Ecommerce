// copy menu for mobile Гар утсанд зориулсан өөрчилөлт
function copyMenu(){
    //copy inside .dpt-cat to .departments Гар утсанд харагдах классыг сольж тавьж байна. 
    let dptCategory=document.querySelector('.dpt-cat');
    let dptPlace=document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;

    //copy inside nav to nav Гар утсанд харагдах классыг сольж тавьж байна.
    let mainNav=document.querySelector('.header-nav nav');
    let navPlace=document.querySelector('.off-canvas nav');
    navPlace.innerHTML=mainNav.innerHTML;

    //copy header-top .wrapper to .thetop-nav Гар утсанд харагдах классыг сольж тавьж байна.
    let topNav=document.querySelector('.header-top .wrapper');
    let topPlace=document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML=topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton=document.querySelector('.trigger'),
    closeButton=document.querySelector('.t-close'),
    addclass=document.querySelector('.site');
    menuButton.addEventListener('click', function(){
        addclass.classList.toggle('showmenu')
    });
        closeButton.addEventListener('click', function(){
        addclass.classList.remove('showmenu')
    });


//Sub menu гар утсан дээр гаргах Show sub menu on mobile
const submenu=document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu)=>menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item)=>item!=this? item.closest('.has-child').classList.remove('expand'):null);
    if (this.closest('.has-child').classList!='expand');
    this.closest('.has-child').classList.toggle('expand');
}

//slider
const swiper = new Swiper('.swiper', {
     loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
  });

  // show search
  const searchButton=document.querySelector('.t-search'),
        tClose=document.querySelector('.search-close'),
        showClass=document.querySelector('.site');
    searchButton.addEventListener('click',function(){
        showClass.classList.toggle('showsearch')
    })
    tClose.addEventListener('click', function(){
        showClass.classList.remove('showsearch')
    })