// Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',e=>{
        const id=a.getAttribute('href').slice(1);
        const el=document.getElementById(id);
        if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}
      })
    });

    // Contact form: open mailto with prefilled body
    const f=document.getElementById('contactForm');
    f.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name=f.name.value.trim();
      const email=f.email.value.trim();
      const msg=f.message.value.trim();
      const subject=encodeURIComponent('New project inquiry from '+name);
      const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject:\n${msg}`);
      window.location.href=`mailto:dx.buildersllc@gmail.com?subject=${subject}&body=${body}`;
    });

    // year
    document.getElementById('year').textContent=new Date().getFullYear();

    // Pause banner on hover (optional)
    const banner=document.getElementById('banner');
    banner.addEventListener('mouseenter', ()=>banner.style.animationPlayState='paused');
    banner.addEventListener('mouseleave', ()=>banner.style.animationPlayState='running');