Issues

* ~~Every time I click a star it refreshes the stars component and therefore reloads 200 stars and chages their positions...~~ Solved by using useMemo to store the stars BUT...

* UFOs refresh on component re-render. Can't store using useMemo as it prevents the animation updates/ lasers#   p o r t f o l i o  
 