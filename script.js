const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';nav.querySelectorAll('a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}));
document.getElementById('year').textContent=new Date().getFullYear();
const lightbox=document.getElementById('lightbox');const lightboxImg=lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImg.src=item.dataset.full;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src=''}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
