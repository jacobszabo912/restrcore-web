const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.style.background=window.scrollY>40?'rgba(8,8,8,0.98)':'rgba(10,10,10,0.92)'});
const navToggle=document.getElementById('navToggle');
const navMobile=document.getElementById('navMobile');
navToggle.addEventListener('click',()=>navMobile.classList.toggle('open'));
navMobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navMobile.classList.remove('open')));
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){const target=document.querySelector(this.getAttribute('href'));if(target){e.preventDefault();window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'})}})});
const billingToggle=document.getElementById('billingToggle');
const toggleMonthly=document.getElementById('toggleMonthly');
const toggleAnnual=document.getElementById('toggleAnnual');
const starterNote=document.getElementById('starterAnnualNote');
const proNote=document.getElementById('proAnnualNote');
if(billingToggle){billingToggle.addEventListener('change',()=>{const a=billingToggle.checked;toggleMonthly.classList.toggle('active',!a);toggleAnnual.classList.toggle('active',a);document.querySelectorAll('.price-amount').forEach(el=>{if(!el.dataset.monthly)return;el.textContent=a?'$'+el.dataset.annual:'$'+el.dataset.monthly});if(starterNote)starterNote.style.display=a?'block':'none';if(proNote)proNote.style.display=a?'block':'none'})}
const contactForm=document.getElementById('contactForm');
if(contactForm){contactForm.addEventListener('submit',function(e){e.preventDefault();const btn=this.querySelector('button[type="submit"]');const orig=btn.textContent;btn.textContent='Sending...';btn.disabled=true;setTimeout(()=>{btn.textContent='✓ Message Sent!';btn.style.background='#00C896';contactForm.reset();setTimeout(()=>{btn.textContent=orig;btn.style.background='';btn.disabled=false},4000)},1200)})}
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';obs.unobserve(e.target)}})},{threshold:0.1});
document.querySelectorAll('.feature-card,.pricing-card,.consulting-card,.hardware-card,.value-card').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity 0.5s ease,transform 0.5s ease';obs.observe(el)});
