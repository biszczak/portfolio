import styled from 'styled-components';


export const ContactSection = styled.div`

padding-top: 70px;
padding-bottom: 70px;
max-width: 1210px;
padding-left: 30px;
padding-right: 30px;
margin-left: auto;
margin-right: auto;
text-align: center;

h2 {
    font-size: 32px;
    margin-bottom: 70px;
}

.wrapper {
    background-color: #f4f5f6;
    padding: 50px 20px;

    p {
        margin: 0;
        margin-bottom: 50px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input, textarea, div {
            width: 500px;
            transition: ease-in .2s;
        }

        input {
            outline: none;
            border: none;
            background-color: transparent;
            box-shadow: none;
            border-bottom: 2px solid #e8e8e8;
            margin-bottom: 20px;
            line-height: 26px;
            padding: 10px 0;
            position: relative;

            &:hover, &:focus {
                border-bottom: 2px solid #fb088e;
            }

            &.clear {
                border: none;
                cursor: pointer;
                width: 190px;

                &:hover {
                    opacity: .4;
                }
            }
        }

        textarea {
            outline: none;
            border: none;
            background-color: transparent;
            overflow-wrap: break-word;
            padding: 10px 0;
            border-bottom: 2px solid #e8e8e8;
            height: 200px;
            margin-bottom: 20px;

            &:hover {
                border-bottom: 2px solid #fb088e;
            }
        }

        div {

            Button {
                width: 220px;
            }
        }
    }
}

`;