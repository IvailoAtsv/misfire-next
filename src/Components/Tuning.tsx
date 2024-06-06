import { FaPhone, FaCity, FaLink, FaArrowLeft } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FormPair, inputStyles, labelStyles } from './Contact'
import diesel from '../images/diesel.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { handleTuningScroll } from '../constants/scrollFunctions'

const btnStyles = 'px-2 py-1 max-w-[30%] rounded-lg bg-accent hover:bg-red-800'

const tuningCards: TuningCardProps[] = [
    {
        title: 'Тунинг за дизелови автомобили',
        description: (
            <div>
                <p>Тунинг, който ще преобрази вашето шофиране!</p>
                <br />
                <p>
                    Нашата технология осигурява по-голяма мощност и ускорение,
                    като ви позволява да усетите истинска разлика при всяко
                    натискане на педала.
                </p>
                <br />
                <p>
                    С нашите оптимизации ще извлечете по-малко гориво за
                    по-големи разстояния, спестявайки пари и същевременно
                    намалявайки екологичния си отпечатък.
                </p>
                <br />
                <p>
                    По-гъвкавата и динамична реакция на автомобила ви ще ви
                    помогне да се справяте по-лесно с всяка ситуация на пътя,
                    като ви дава по-голям контрол и увереност.
                </p>
                <br />
                <p>
                    Нашите специалисти се грижат за вашия автомобил с
                    индивидуален подход, гарантирайки, че всички оптимизации
                    отговарят на специфичните му изисквания.
                </p>
                <br />
                <p>
                    Сигурността на вашия автомобил е от първостепенно значение
                    за нас, затова всички наши процедури се извършват със
                    стриктно спазване на фабричните спецификации и най-високите
                    стандарти за качество и безопасност.
                </p>
                <br />
                <p>
                    Свържете се с нас сега и превърнете своя бензинов автомобил
                    в истинско шампионско преживяване на пътя!
                </p>
                <br />
            </div>
        ),
        src: diesel,
    },
    {
        title: 'Тунинг за бензинови автомобили',
        description: (
            <div>
                <p>
                    Освободете потенциала на вашия дизелов автомобил с нашия
                    тунинг!
                </p>
                <br />
                <p>
                    Жадувате ли за по-изразително изживяване на пътя? Нашата
                    услуга за дизелов тунинг е решението!
                </p>
                <br />
                <p>
                    Повишена мощност и икономия на гориво ще ви позволят да
                    изживеете ново ниво на шофиране.
                </p>
                <br />
                <p>
                    Нашите оптимизации подобряват динамиката на двигателя,
                    гарантирайки по-гладко и по-отзивчиво ускорение.
                </p>
                <br />
                <p>
                    Специално изготвени програми, съобразени с конкретните
                    изисквания на вашия автомобил.
                </p>
                <br />
                <p>
                    Нашите техници са квалифицирани и гарантират сигурността и
                    надеждността на вашето превозно средство.
                </p>
                <br />
                <p>
                    Не чакайте повече, свържете се с нас днес и превърнете
                    вашето дизелово возило в истинско шампионско преживяване на
                    пътя!
                </p>
                <br />
            </div>
        ),
        src: diesel,
    },
]

export const Tuning = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full min-h-screen flex justify-center items-start bg-primary">
            <div className="w-[90%] max-w-[1600px] flex-col items-start flex h-full justify-center">
                <nav className="w-full bg-primary sticky top-0 py-4 pl-2 left-0 flex justify-between items-center text-lg text-white">
                    <button
                        className={`flex items-center justify-center gap-2 border-b-2 px-2 py-1 hover:bg-accent hover:rounded-lg border-accent`}
                        onClick={() => navigate('/')}
                    >
                        <FaArrowLeft size={16} /> Back
                    </button>

                    <button
                        onClick={() => handleTuningScroll()}
                        className={btnStyles}
                    >
                        Направете запитване
                    </button>
                </nav>
                <div className="flex justify-center flex-col items-center gap-4">
                    {tuningCards.map((card, i) => (
                        <TuningCard
                            title={card.title}
                            description={card.description}
                            reverse={i % 2 === 0}
                            src={card.src}
                        />
                    ))}
                </div>
                <section className="w-[100%] my-10 bg-accent mx-auto">
                    <form
                        id="tuning"
                        className="text-white font-normal w-full h-full flex p-8 gap-4 flex-col justify-between items-start"
                    >
                        <h2 className="text-5xl mb-auto font-bold">
                            Имате въпрос?
                        </h2>
                        <div className="text-white font-normal w-full flex-1 h-full gap-2 flex flex-col justify-evenly items-start">
                            <FormPair>
                                <label className={labelStyles}>Име</label>
                                <input type="text" className={inputStyles} />
                            </FormPair>
                            <FormPair>
                                <label className={labelStyles}>
                                    Телефон за обратна връзка
                                </label>
                                <input type="text" className={inputStyles} />
                            </FormPair>
                            <FormPair>
                                <label className={labelStyles}>Върпос</label>
                                <input
                                    type="text"
                                    name="message"
                                    className={inputStyles}
                                />
                            </FormPair>
                            <button className="bg-white text-accent font-bold w-[30%] ml-auto rounded-lg px-4 py-2 mt-2  hover:bg-red-800 hover:text-white">
                                Изпращане
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
interface TuningCardProps {
    title: string
    description: ReactNode
    reverse?: boolean
    src?: string
}
const TuningCard: React.FC<TuningCardProps> = ({ title, description, src }) => {
    return (
        <section>
            <h2 className="text-4xl my-4 font-bold text-white mr-auto">
                {title}
            </h2>
            <div className="w-full p-4 min-h-[600px] bg-colorBg text-white gap-4 flex md:flex-row flex-col justify-between items-center">
                <img
                    src={src}
                    className="lg:min-h-[580px] min-h-[280px] w-full overflow-auto rounded-lg flex-1 object-cover"
                />
                <article className="flex-1 p-4">
                    <p className="lg:text-lg text:md mb-auto">{description}</p>
                </article>
            </div>
        </section>
    )
}
