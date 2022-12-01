 // circle 

      // const x = canvas.current.width / 2;
      // const y = canvas.current.height / 2;
      // const raduis = Math.min(x, y)

      // NewCanvas.current.width = raduis * 2
      // NewCanvas.current.height = raduis * 2
      // NewctxRef.current.beginPath();
      // NewctxRef.current.arc(raduis, raduis, raduis, 0, Math.PI * 2, true);
      // NewctxRef.current.closePath();
      // NewctxRef.current.clip();

      // NewctxRef.current.drawImage(canvas.current, 0, 0, raduis * 2, raduis * 2);



      // star

      function drawStar(centerX, centerY, arms, innerRaduis, outerRaduis, starAngle,
        strokeStyle, lineWidth, fillStyle,) {
        var angle = Math.PI / arms
        NewctxRef.current.save();
        NewctxRef.current.strokeStyle = strokeStyle
        NewctxRef.current.fillStyle = fillStyle
        NewctxRef.current.lineWidth = lineWidth
        NewctxRef.current.translate(centerX, centerY);
        NewctxRef.current.rotate(starAngle * Math.PI / 180);
        NewctxRef.current.beginPath();

        NewctxRef.current.moveTo(outerRaduis, 0);

        for (var i = 0; i < 2 * arms; i++) {

          var hyp = (i % 2 == 1) ? innerRaduis : outerRaduis;
          var x = Math.cos(i * angle) * hyp;
          var y = Math.sin(i * angle) * hyp
          NewctxRef.current.lineTo(x, y);
        }
        NewctxRef.current.closePath();
        NewctxRef.current.fill();
        NewctxRef.current.stroke()
        NewctxRef.current.clip()
        NewctxRef.current.restore();
      }
      // const width = NewCanvas.current.width = canvas.current.width
      // const height = NewCanvas.current.height = canvas.current.height

      // const raduis = Math.min(width, height)

      // drawStar(width / 2, height / 2, 5, raduis / 4, raduis / 2, 18, 'black', 1, 'black')
      // NewctxRef.current.globalCompositeOperation = 'source-in'

      // NewctxRef.current.drawImage(canvas.current, 0, 0, width, height);
      // NewCanvas.current.globalCompositeOperation = 'source-over'

      // heart

      // const width = NewCanvas.current.width = canvas.current.width
      // const height = NewCanvas.current.height = canvas.current.height
      // const xCurve = width / 10
      // const yCurve = height / 4.5

      // NewctxRef.current.moveTo(width / 2, height)
      // NewctxRef.current.bezierCurveTo(width + xCurve, height / 2, width + xCurve, -yCurve, width / 2, height / 10)

      // NewctxRef.current.bezierCurveTo(-xCurve, -yCurve, -xCurve, height / 2, width / 2, height)
      // NewctxRef.current.fill()

      // NewctxRef.current.globalCompositeOperation = 'source-in'

      // NewctxRef.current.drawImage(canvas.current, 0, 0, canvas.current.width, canvas.current.height);
      // NewCanvas.current.globalCompositeOperation = 'source-over'