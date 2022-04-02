p0 = 1000
percent = 2
aug = 50
p = 1200
total = 0
var n = 0
percent = percent/100

while (total < p) {
  total = p0 + p0 * percent + aug
  p0 = total
  n++
  console.log(p0)
  console.log(percent)
  console.log(aug)
  console.log(total)
}