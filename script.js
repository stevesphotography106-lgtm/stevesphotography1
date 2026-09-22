const photos = [
  {src:'assets/DSC_9621.jpg', title:'Blue Angels — Formation Climb'},
  {src:'assets/DSC_9627.jpg', title:'Blue Angels — Tight Formation'},
  {src:'assets/DSC_9590.jpg', title:'Blue Angels — Climbing Formation'},
  {src:'assets/DSC_9575.jpg', title:'Blue Angels — Six-Ship Formation'},
  {src:'assets/DSC_9609.jpg', title:'Blue Angels — Crossing Maneuver'},
  {src:'assets/DSC_9601.jpg', title:'Blue Angels — Vertical Formation'},
  {src:'assets/DSC_9597.jpg', title:'Blue Angels — Stacked Formation'},
  {src:'assets/DSC_9580.jpg', title:'Blue Angels — Formation Pass'},
  {src:'assets/DSC_8616.jpg', title:'F-22 Raptor — Banking'},
  {src:'assets/DSC_8626.jpg', title:'F-22 Raptor — Side Profile'},
  {src:'assets/DSC_8651.jpg', title:'F-22 Raptor — Vertical Climb'},
  {src:'assets/DSC_8777.jpg', title:'F-22 Raptor — Flare Demonstration'},
  {src:'assets/DSC_8928.jpg', title:'F-22 Raptor — Overhead Pass'},
  {src:'assets/DSC_8664.jpg', title:'F-22 Raptor — Afterburner'},
  {src:'assets/DSC_8407.jpg', title:'F-22 Raptor — Vertical Maneuver'},
  {src:'assets/DSC_6916.jpg', title:'Warbird Thunder Demo Team — Formation'},
  {src:'assets/DSC_7219.jpg', title:'Warbird Thunder Demo Team — Underside Formation'},
  {src:'assets/DSC_7247.jpg', title:'Warbird Thunder Demo Team — Smoke Climb'},
  {src:'assets/DSC_7250.jpg', title:'Warbird Thunder Demo Team — Climbing Maneuver'},
  {src:'assets/DSC_7367.jpg', title:'Warbird Thunder Demo Team — Close Formation'},
  {src:'assets/DSC_7369.jpg', title:'Warbird Thunder Demo Team — Formation Pass'},
  {src:'assets/DSC_7386.jpg', title:'Warbird Thunder Demo Team — Pilot'},
  {src:'assets/DSC_7416.jpg', title:'Warbird Thunder Demo Team — Pilot'},
  {src:'assets/DSC_6928.jpg', title:'VFA-106 F/A-18E — Vertical Maneuver'},
  {src:'assets/DSC_6926.jpg', title:'VFA-106 F/A-18E — Underside Climb'},
  {src:'assets/DSC_7061.jpg', title:'VFA-106 F/A-18E — Pilot'},
  {src:'assets/DSC_7059.jpg', title:'VFA-106 F/A-18E — Cockpit'},
  {src:'assets/DSC_6797.jpg', title:'UH-60M Black Hawk — Overhead'},
  {src:'assets/DSC_6795.jpg', title:'UH-60M Black Hawk — Pass'},
  {src:'assets/DSC_6790.jpg', title:'UH-60M Black Hawk — Close Overhead'},
  {src:'assets/DSC_6788.jpg', title:'UH-60M Black Hawk — Climb'}
];
const lightbox = document.getElementById('lightbox');
const image = document.getElementById('lightboxImage');
const counter = document.getElementById('lightboxCounter');
const title = document.getElementById('lightboxTitle');
let current = 0;
function showPhoto(index){
  current=(index+photos.length)%photos.length;
  image.src=photos[current].src;
  image.alt=photos[current].title;
  title.textContent=photos[current].title;
  counter.textContent=String(current+1).padStart(2,'0')+' / '+String(photos.length).padStart(2,'0');
}
function openLightbox(index){ showPhoto(index); lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function closeLightbox(){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
document.querySelectorAll('.photo').forEach(photo=>photo.addEventListener('click',()=>openLightbox(Number(photo.dataset.index))));
const closeBtn = document.getElementById('closeLightbox');
const prevBtn = document.getElementById('prevPhoto');
const nextBtn = document.getElementById('nextPhoto');
if (closeBtn) closeBtn.addEventListener('click',closeLightbox);
if (prevBtn) prevBtn.addEventListener('click',()=>showPhoto(current-1));
if (nextBtn) nextBtn.addEventListener('click',()=>showPhoto(current+1));
lightbox.addEventListener('click',e=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener('keydown',e=>{ if(!lightbox.classList.contains('open')) return; if(e.key==='Escape') closeLightbox(); if(e.key==='ArrowLeft') showPhoto(current-1); if(e.key==='ArrowRight') showPhoto(current+1); });


// Portfolio category filters
document.querySelectorAll('.portfolio-filter').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.portfolio-filter').forEach(btn => {
      const active = btn === button;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.portfolio-gallery').forEach(section => {
      const show = filter === 'all' || section.dataset.category === filter;
      section.classList.toggle('is-hidden', !show);
    });
    const firstVisible = document.querySelector('.portfolio-gallery:not(.is-hidden)');
    if (firstVisible) firstVisible.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
