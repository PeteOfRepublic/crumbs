# Crumbs
I had the idea that if you use JS cookies and HTML5 localStorage together that it might be
possible to create a loop where after permission had been granted to store data a site owner
could recreate a cookie from localStorage and vice versa. This is just a proof of concept and
might be considered somewhat 'Black Hat'.
Think of it like cookie persistence but like *really* persistent.
It was built on a lazy sofa Sunday so probably doesn't work on all browser/platform combos but it definitely works on Mac OS 10.11 and Chrome build 50. YMMV.
## Use
If you're thinking of implementing Crumbs on your own site then perhaps you should think carefully at which point you do so. I would certainly only write the initial cookies after the user had clicked to accept. Then this cookie/localStorage Frankenscript wouldn't feel quite so evil. Use your own discretion.
## Notes
After I started work on this project I realised that it's so obvious that someone must have already implemented it in the wild. That's when I discovered everCookie. It's not quite the same thing but it's got elements of the same sort of thinking.
## License
MIT
