	camera = document.getElementById("camera")
    var SpeechRecognition = window.webkitSpeechRecognition
    var recognition = new SpeechRecognition()
    function start(){
        document.getElementById("textbox").innerHTML= ""
        recognition.start()
    }
    recognition.onresult= function(event){
        console.log(event)
        var content= event.results[0][0].transcript
        console.log(content)
        document.getElementById("textbox").innerHTML= content
        speak()
    }
    function speak(){
        var synth= window.speechSynthesis
        speakData= document.getElementById('textbox').value
        utterThis= new SpeechSynthesisUtterance(speakData)
        synth.speak(utterThis)
        Webcam.attach(camera)
        setTimeout(() => {
            takeSnapshot()
            save()
        }, 5000);
    }
    Webcam.set({
        width: 360,
        height: 250,
        image_format : 'png',
        png_quality:90
    })
    function takeSnapshot(){
        Webcam.snap(function (data_uri){
            document.getElementById("result").innerHTML= '<img src="'+data_uri+'" id="selfieImage">'
        })
    }
    function save(){
        link= document.getElementById("link")
        image= document.getElementById("selfieImage").src
        link.href= image
        link.click()
    }