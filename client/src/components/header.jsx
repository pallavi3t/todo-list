// import logo from '/checkcircle.svg';
import logo from '/checkmark.svg';

export function Header(){
    return (
        <header>
            <div class="flex justify-center mb-4 pt-5">
                <img class="" src={logo} alt="" />
                <h1 class='font-roboto font-light text-4xl text-center text-slate-200 py-5 px-3'> To-Do List</h1>
            </div>
        </header>
    )
}