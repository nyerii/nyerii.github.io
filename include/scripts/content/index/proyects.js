document.getElementById("pp-tejiendo-historia-btn").addEventListener("click",function(e){e.preventDefault(),location.href="proyects/tejiendo-historia"}),document.getElementById("pp-dps-24-btn").addEventListener("click",function(e){e.preventDefault(),location.href="proyects/dps24"}),document.getElementById("pp-fesbal-btn").addEventListener("click",function(e){e.preventDefault(),window.open("https://www.fesbal.org.es/","_blank")}),document.getElementById("pp-dps-25-btn").addEventListener("click",function(e){e.preventDefault(),location.href="proyects/dps25"}),document.getElementById("phr-view-more").addEventListener("click",function(e){e.preventDefault();var t=document.getElementById("toggle-proyects");"none"===t.style.display?(t.style.display="block",document.getElementById("phr-view-more").innerHTML='<i class="fa-solid fa-chevron-up"></i> Ver Menos'):(t.style.display="none",document.getElementById("phr-view-more").innerHTML='<i class="fa-solid fa-chevron-down"></i> Ver M\xe1s')}),document.getElementById("phr-more").addEventListener("click",function(e){e.preventDefault(),location.href="proyects/"}),$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>$("#proyects").offset().top-$(window).height()+200&&$("#proyects").css("opacity","1")})});