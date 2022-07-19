const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs',
    missing: false
},
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk',
    missing: false
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147',
    missing: false
},
{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145',
    missing: false
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',
    trackingNumber: '0183ial',
    missing: false
},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz',
    missing: false
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367',
    missing: false
}
]

function missingPackage(){
    let randomPackage = packages[Math.floor(Math.random()* packages.length)]
    console.log('missing package random', randomPackage)
    randomPackage.missing = true

}

missingPackage()

let currentPackages = packages

function drawPackages(){
    let template = ''
    currentPackages.forEach(p => template += `<div class="col-6 btn btn-warning p-3 border border-dark" onclick="check('${p.to}')"><b>TO:</b> ${p.to} <br> <b>ID:</b> ${p.trackingNumber} </div>`)
    let packageElm = document.getElementById('packages')
    packageElm.innerHTML = template
}

drawPackages()

function check(to){
    // debugger
    let checked = packages.find(p => p.to == to)
    if(checked.missing == true){
        window.alert('You found the missing package!')
    } else {
        window.alert('This is not the missing package.')
    }
}

function filterPackages(property){
    let missingPackage = packages.find(p => p.missing == true)
    currentPackages = currentPackages.filter(p => p[property] == missingPackage[property])
    drawPackages()
    
}