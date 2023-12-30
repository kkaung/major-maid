import {
    AlertTriangle,
    ArrowDown,
    ArrowUp,
    BarChart3,
    CalendarDays,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    ChevronsUpDown,
    ChevronUp,
    Circle,
    Copy,
    CreditCard,
    Crop,
    DollarSign,
    Download,
    Edit,
    Eye,
    EyeOff,
    FileTerminal,
    Filter,
    Footprints,
    HardHat,
    Image,
    Loader2,
    LogOut,
    Menu,
    MessageSquare,
    Minus,
    Moon,
    MoreHorizontal,
    MoreVertical,
    Package,
    Plus,
    PlusCircle,
    RefreshCw,
    Search,
    Send,
    Settings,
    Shirt,
    ShoppingBag,
    ShoppingCart,
    Sliders,
    SlidersHorizontal,
    Star,
    SunMedium,
    Trash,
    Twitter,
    UploadCloud,
    User,
    Volume2,
    VolumeX,
    Wallet,
    X,
    type LucideProps,
    Home,
    BarChart2,
    Video,
    VenetianMask,
    Tag,
    List,
    Camera,
    Hash,
    WholeWord,
    Bookmark,
    Book,
    Pencil,
    Dices,
    Languages,
    Film,
    Mic,
    Focus,
    Zap,
    Sticker,
    FileText,
    MousePointer2,
    BellRing,
    Heart,
    Clock,
    File,
    Glasses,
    Play,
    Youtube,
    ArrowRight,
    ArrowLeft,
    Phone,
    Mail,
} from 'lucide-react';
import { MoonIcon } from '@radix-ui/react-icons';

// export type Icon = LucideIcon;

export const Icons = {
    sun: SunMedium,
    moon: MoonIcon,
    star: Star,
    twitter: Twitter,
    close: X,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    chevronsLeft: ChevronsLeft,
    chevronsRight: ChevronsRight,
    chevronUp: ChevronUp,
    chevronDown: ChevronDown,
    chevronUpDown: ChevronsUpDown,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown,
    menu: Menu,
    verticalThreeDots: MoreVertical,
    horizontalThreeDots: MoreHorizontal,
    verticalSliders: Sliders,
    horizontalSliders: SlidersHorizontal,
    circle: Circle,
    check: Check,
    add: Plus,
    addCircle: PlusCircle,
    remove: Minus,
    view: Eye,
    hide: EyeOff,
    trash: Trash,
    edit: Edit,
    crop: Crop,
    reset: RefreshCw,
    send: Send,
    copy: Copy,
    downlaod: Download,
    warning: AlertTriangle,
    search: Search,
    filter: Filter,
    calendar: CalendarDays,
    user: User,
    terminal: FileTerminal,
    settings: Settings,
    logout: LogOut,
    volumne: Volume2,
    volumneMute: VolumeX,
    message: MessageSquare,
    billing: CreditCard,
    wallet: Wallet,
    dollarSign: DollarSign,
    cart: ShoppingCart,
    product: Package,
    store: ShoppingBag,
    chart: BarChart3,
    upload: UploadCloud,
    placeholder: Image,
    clothing: Shirt,
    shoes: Footprints,
    accessories: HardHat,
    home: Home,
    barChart: BarChart2,
    video: Video,
    venetianMask: VenetianMask,
    tag: Tag,
    list: List,
    camera: Camera,
    hash: Hash,
    wholeWord: WholeWord,
    bookmark: Bookmark,
    book: Book,
    pencile: Pencil,
    dices: Dices,
    languages: Languages,
    film: Film,
    mic: Mic,
    focus: Focus,
    zap: Zap,
    sticker: Sticker,
    eye: Eye,
    fileText: FileText,
    x: X,
    bellRing: BellRing,
    mousePointer: MousePointer2,
    heart: Heart,
    clock: Clock,
    file: File,
    messageSquare: MessageSquare,
    glasses: Glasses,
    plus: Plus,
    youtube: Youtube,
    arrowRight: ArrowRight,
    arrowLeft: ArrowLeft,
    phone: Phone,
    mail: Mail,
    starFull: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
        >
            <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
            />
        </svg>
    ),
    play: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440Z"
            />
        </svg>
    ),
    logo: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="7" cy="15" r="2" />
            <circle cx="17" cy="15" r="2" />
            <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
        </svg>
    ),
    reddit: ({ ...props }: LucideProps) => (
        <svg
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 170 152"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M169.991994,77.0227358 C169.566965,66.8220555 161.066399,58.7465169 150.653204,58.9590311 C145.977892,59.1715453 141.727609,61.0841728 138.539896,64.0593713 C124.088932,54.0712051 106.875284,48.7583508 89.2366081,48.3333225 L97.5246609,8.59317215 L124.938989,14.1185406 C125.789046,21.1315083 131.951957,26.2318485 138.964925,25.3817918 C145.977892,24.5317351 151.078232,18.3688241 150.228176,11.3558564 C149.378119,4.34288869 143.215208,-0.757451458 136.20224,0.0926052337 C132.164471,0.517633579 128.55173,2.85528948 126.639103,6.25551625 L95.3995191,0.0926052337 C93.2743774,-0.332423112 91.1492357,0.942661925 90.7242073,3.06780365 L81.3735837,47.4832658 C63.5223932,47.6957799 46.3087452,53.2211484 31.4327531,63.2093146 C23.9947571,56.1963469 12.0939634,56.408861 5.08099569,64.0593713 C-1.93197201,71.4973673 -1.71945784,83.398161 5.93105238,90.4111287 C7.41865159,91.6862137 9.11876498,92.9612988 11.0313925,93.8113555 C10.8188784,95.723983 10.8188784,97.6366106 11.0313925,99.3367239 C11.0313925,128.026137 44.3961177,151.402696 85.6238672,151.402696 C126.851617,151.402696 160.216342,128.238651 160.216342,99.3367239 C160.428856,97.4240964 160.428856,95.5114688 160.216342,93.8113555 C166.166739,90.836157 170.204508,84.2482177 169.991994,77.0227358 L169.991994,77.0227358 Z M41.8459476,89.9861003 C41.8459476,82.9731326 47.5838303,77.23525 54.596798,77.23525 C61.6097657,77.23525 67.3476483,82.9731326 67.3476483,89.9861003 C67.3476483,96.999068 61.6097657,102.736951 54.596798,102.736951 C47.5838303,102.736951 41.8459476,96.999068 41.8459476,89.9861003 Z M116.225908,125.263453 C107.087799,132.063907 96.0370617,135.676648 84.7738105,135.039105 C73.5105593,135.464133 62.2473082,132.063907 53.3217129,125.263453 C52.0466279,123.775854 52.2591421,121.650712 53.7467413,120.375627 C55.0218263,119.313056 56.7219397,119.313056 58.2095389,120.375627 C65.8600491,125.900996 75.2106727,128.876194 84.7738105,128.451166 C94.3369483,128.876194 103.687572,126.326024 111.550596,120.588141 C113.038195,119.313056 115.163337,119.313056 116.650936,120.588141 C117.926021,122.07574 117.926021,124.200882 116.650936,125.688481 L116.650936,125.263453 L116.225908,125.263453 Z M114.100766,103.374493 C107.087799,103.374493 101.349916,97.6366106 101.349916,90.6236429 C101.349916,83.6106752 107.087799,77.8727925 114.100766,77.8727925 C121.113734,77.8727925 126.851617,83.6106752 126.851617,90.6236429 C127.064131,97.6366106 121.751277,103.587007 114.525795,103.799522 C114.313281,103.799522 114.100766,103.799522 113.888252,103.799522 L114.100766,103.374493 Z"
                viewBox="0 0 170 152"
            ></path>
        </svg>
    ),
    google: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
        </svg>
    ),
    facebook: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
        </svg>
    ),
    english: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            // style="enable-background:new 0 0 512 512"
            xmlSpace="preserve"
            {...props}
        >
            <path fill="#fff" d="M0 85.333h512V426.67H0z" />
            <path
                fill="#d80027"
                d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"
            />
            <path
                fill="#0052b4"
                d="M393.785 315.358 512 381.034v-65.676zm-82.133 0L512 426.662v-31.474l-143.693-79.83zm146.982 111.304-146.982-81.664v81.664z"
            />
            <path
                fill="#fff"
                d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"
            />
            <path
                fill="#d80027"
                d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"
            />
            <path
                fill="#0052b4"
                d="M90.341 315.356 0 365.546v-50.19zm110.007 14.154v97.151H25.491z"
            />
            <path
                fill="#d80027"
                d="M143.693 315.358 0 395.188v31.474l200.348-111.304z"
            />
            <path
                fill="#0052b4"
                d="M118.215 196.634 0 130.958v65.676zm82.133 0L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z"
            />
            <path
                fill="#fff"
                d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"
            />
            <path
                fill="#d80027"
                d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"
            />
            <path
                fill="#0052b4"
                d="M421.659 196.636 512 146.446v50.19zm-110.007-14.154V85.331h174.857z"
            />
            <path
                fill="#d80027"
                d="M368.307 196.634 512 116.804V85.33L311.652 196.634z"
            />
        </svg>
    ),
    china: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            {...props}
        >
            <path fill="#d80027" d="M0 85.331h512v341.337H0z" />
            <path
                fill="#ffda44"
                d="m178.923 189.567 14.656 45.107h47.429l-38.371 27.878 14.657 45.109-38.371-27.879-38.371 27.879 14.656-45.109-38.371-27.878h47.429zM271.3 339.593l-14.39-10.455-14.388 10.454 5.495-16.914-14.389-10.455h17.786l5.496-16.916 5.498 16.916h17.785l-14.389 10.454zm37.537-51.666h-17.785l-5.496 16.914-5.496-16.913-17.787-.001 14.391-10.455-5.498-16.915 14.39 10.453 14.389-10.453-5.496 16.915zm0-63.864-14.388 10.455 5.495 16.914-14.388-10.453-14.39 10.455 5.498-16.917-14.391-10.452 17.788-.002 5.495-16.916 5.496 16.916zM271.3 172.397l-5.495 16.916 14.388 10.453-17.785.001-5.498 16.917-5.496-16.918-17.785.002 14.389-10.456-5.496-16.916 14.388 10.455z"
            />
        </svg>
    ),
    korea: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            // style="enable-background:new 0 0 512 512"
            xmlSpace="preserve"
            {...props}
        >
            <path fill="#fff" d="M0 85.331h512v341.337H0z" />
            <path
                fill="#d80027"
                d="M318.33 255.994c0 15.583-27.906 54.539-62.33 54.539s-62.33-38.957-62.33-54.539c0-34.424 27.906-62.33 62.33-62.33s62.33 27.906 62.33 62.33z"
            />
            <path
                fill="#0052b4"
                d="M318.33 255.994c0 34.424-27.906 62.33-62.33 62.33s-62.33-27.906-62.33-62.33"
            />
            <path d="m322.114 311.096 16.528-16.528 11.018 11.018-16.528 16.528zm-27.548 27.534 16.528-16.527 11.018 11.018-16.528 16.528zm60.604 5.502 16.527-16.528 11.018 11.018-16.527 16.528zm-27.549 27.557 16.528-16.528 11.018 11.018-16.528 16.528zm11.02-44.075 16.528-16.527 11.018 11.018-16.527 16.527zm-27.547 27.546 16.528-16.528 11.018 11.018-16.528 16.527zm44.083-154.264-44.073-44.073 11.018-11.018 44.073 44.073zm-44.078-11.015-16.528-16.527 11.017-11.018 16.528 16.528zm27.536 27.55-16.528-16.527 11.017-11.018 16.528 16.528zm5.5-60.606-16.528-16.528 11.018-11.018 16.528 16.528zm27.559 27.549-16.528-16.527 11.019-11.019 16.527 16.528zM140.31 327.61l44.073 44.074-11.018 11.018-44.074-44.073zm44.058 11.025 16.527 16.527-11.017 11.018-16.528-16.528zm-27.536-27.548 16.528 16.528-11.019 11.018-16.527-16.528zm16.531-16.523 44.073 44.073-11.018 11.019-44.073-44.074zm11.021-154.277-44.073 44.074-11.018-11.018 44.073-44.074zm16.511 16.536-44.073 44.074-11.018-11.018 44.073-44.074zm16.529 16.528-44.074 44.074-11.017-11.017 44.074-44.074z" />
        </svg>
    ),
    japan: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="enable-background:new 0 0 512 512"
            xmlSpace="preserve"
            {...props}
        >
            <path fill="#fff" d="M0 85.331h512v341.337H0z" />
            <circle fill="#d80027" cx="256" cy="255.994" r="96" />
        </svg>
    ),

    circleHongKong: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            {...props}
        >
            <path fill="#EC1B2E" d="M0 0h640v480H0" />
            <path
                id="hk-a"
                fill="#fff"
                d="M346.3 103.1C267 98 230.6 201.9 305.6 240.3c-26-22.4-20.6-55.3-10.1-72.4l1.9 1.1c-13.8 23.5-11.2 52.7 11.1 71-12.7-12.3-9.5-39 12.1-48.9s23.6-39.3 16.4-49.1q-14.7-25.6 9.3-38.9zM307.9 164l-4.7 7.4-1.8-8.6-8.6-2.3 7.8-4.3-.6-8.9 6.5 6.1 8.3-3.3-3.7 8.1 5.6 6.8z"
            />
            <use transform="rotate(72 312.5 243.5)" />
            <use transform="rotate(144 312.5 243.5)" />
            <use transform="rotate(216 312.5 243.5)" />
            <use transform="rotate(288 312.5 243.5)" />
        </svg>
    ),
    circleJapan: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            {...props}
        >
            <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#a)">
                <path fill="#eee" d="M0 0h512v512H0z" />
                <circle cx="256" cy="256" r="111.3" fill="#d80027" />
            </g>
        </svg>
    ),
    circleThailand: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            {...props}
        >
            <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#a)">
                <path
                    fill="#d80027"
                    d="M0 0h512v89l-79.2 163.7L512 423v89H0v-89l82.7-169.6L0 89z"
                />
                <path
                    fill="#eee"
                    d="M0 89h512v78l-42.6 91.2L512 345v78H0v-78l40-92.5L0 167z"
                />
                <path fill="#0052b4" d="M0 167h512v178H0z" />
            </g>
        </svg>
    ),
    circleKorea: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            {...props}
        >
            <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#a)">
                <path fill="#eee" d="M0 0h512v512H0Z" />
                <path
                    fill="#333"
                    d="m350 335 24-24 16 16-24 23zm-39 39 24-24 15 16-23 24zm87 8 23-24 16 16-24 24zm-40 39 24-23 16 15-24 24Zm16-63 24-23 15 15-23 24zm-39 40 23-24 16 16-24 23zm63-221-63-63 15-15 64 63zm-63-15-24-24 16-16 23 24zm39 39-24-24 16-15 24 23zm8-87-24-23 16-16 24 24Zm39 40-23-24 15-16 24 24ZM91 358l63 63-16 16-63-63zm63 16 23 24-15 15-24-23zm-40-39 24 23-16 16-23-24zm24-24 63 63-16 16-63-63zm16-220-63 63-16-16 63-63zm23 23-63 63-15-16 63-63zm24 24-63 63-16-16 63-63z"
                />
                <path
                    fill="#d80027"
                    d="M319 319 193 193a89 89 0 1 1 126 126z"
                />
                <path fill="#0052b4" d="M319 319a89 89 0 1 1-126-126z" />
                <circle cx="224.5" cy="224.5" r="44.5" fill="#d80027" />
                <circle cx="287.5" cy="287.5" r="44.5" fill="#0052b4" />
            </g>
        </svg>
    ),
    circleIndonesia: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            {...props}
        >
            <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#a)">
                <path fill="#eee" d="m0 256 249.6-41.3L512 256v256H0z" />
                <path fill="#a2001d" d="M0 0h512v256H0z" />
            </g>
        </svg>
    ),

    circleGermany: ({ ...props }: LucideProps) => (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g
                    id="Group"
                    transform="translate(0.000000, 0.000000)"
                    fillRule="nonzero"
                >
                    <path
                        d="M0.995562991,21.5644338 C3.25600632,27.6577641 9.12000341,31.9999841 16,31.9999841 C22.8799966,31.9999841 28.7439937,27.6577641 31.004437,21.5644338 L16,20.1742122 L0.995562991,21.5644338 Z"
                        id="Path"
                        fill="#FFDA44"
                    ></path>
                    <path
                        d="M16,0 C9.12000341,0 3.25600632,4.34222007 0.995562991,10.4355504 L16,11.8257719 L31.004437,10.4346615 C28.7439937,4.34222007 22.8799966,0 16,0 Z"
                        id="Path"
                        fill="#3D3D3D"
                    ></path>
                    <path
                        d="M0.995562991,10.4355504 C0.335356179,12.2163775 -0.00177949552,14.1007251 0,15.9999921 C-0.00188526745,17.8995576 0.33525207,19.7842156 0.995562991,21.5653226 L31.004437,21.5653226 C31.6647479,19.7842156 32.0018853,17.8995576 32,15.9999921 C32.0018853,14.1004265 31.6647479,12.2157686 31.004437,10.4346615 L0.995562991,10.4346615 L0.995562991,10.4355504 Z"
                        id="Path"
                        fill="#D80027"
                    ></path>
                </g>
            </g>
        </svg>
    ),
    circleItaly: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="24"
            height="24"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            {...props}
        >
            <g>
                <circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle>
                <path
                    fill="#d80027"
                    d="M512 256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528 459.906 512 366.071 512 256z"
                    data-original="#d80027"
                ></path>
                <path
                    fill="#6da544"
                    d="M0 256c0 110.071 69.472 203.906 166.957 240.077V15.923C69.472 52.094 0 145.929 0 256z"
                    data-original="#6da544"
                ></path>
            </g>
        </svg>
    ),
    circleSpain: ({ ...props }: LucideProps) => (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g id="Group" fillRule="nonzero">
                    <path
                        d="M0,16 C0,17.957125 0.3520625,19.831875 0.9951875,21.5651875 L16,22.9565 L31.0048125,21.5651875 C31.6479375,19.831875 32,17.957125 32,16 C32,14.042875 31.6479375,12.168125 31.0048125,10.4348125 L16,9.0435 L0.9951875,10.4348125 C0.3520625,12.168125 0,14.042875 0,16 Z"
                        id="Path"
                        fill="#FFDA44"
                    ></path>
                    <g
                        transform="translate(0.995188, 0.000000)"
                        fill="#D80027"
                        id="Shape"
                    >
                        <path d="M30.009625,10.4348125 C27.7489375,4.3420625 21.88425,0 15.0048125,0 C8.125375,0 2.2606875,4.3420625 -1.11022302e-16,10.4348125 L30.009625,10.4348125 Z M-1.11022302e-16,21.5651875 C2.2606875,27.6579375 8.125375,32 15.0048125,32 C21.88425,32 27.7489375,27.6579375 30.009625,21.5651875 L-1.11022302e-16,21.5651875 Z"></path>
                    </g>
                </g>
            </g>
        </svg>
    ),
    circleFrance: ({ ...props }: LucideProps) => (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g id="Group" fillRule="nonzero">
                    <circle
                        id="Oval"
                        fill="#F0F0F0"
                        cx="16"
                        cy="16"
                        r="16"
                    ></circle>
                    <path
                        d="M32,16 C32,9.1205625 27.658,3.255875 21.5651875,0.9951875 L21.5651875,31.004875 C27.658,28.744125 32,22.8794375 32,16 Z"
                        id="Path"
                        fill="#D80027"
                    ></path>
                    <path
                        d="M0,16 C0,22.8794375 4.3420625,28.744125 10.4348125,31.0048125 L10.4348125,0.9951875 C4.3420625,3.255875 0,9.1205625 0,16 Z"
                        id="Path"
                        fill="#0052B4"
                    ></path>
                </g>
            </g>
        </svg>
    ),
    circleChina: ({ ...props }: LucideProps) => (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g id="Group" fillRule="nonzero">
                    <circle
                        id="Oval"
                        fill="#EE1C25"
                        cx="16"
                        cy="16"
                        r="16"
                    ></circle>
                    <g
                        transform="translate(3.188267, 7.277867)"
                        fill="#FFFF00"
                        id="Shape"
                    >
                        <path d="M21.3568,11.248 L19.7856,11.2224 L19.2746667,9.7376 L18.7648,11.2224 L17.1936,11.2490667 L18.4490667,12.192 L17.9893333,13.6928 L19.2757333,12.7914667 L20.5621333,13.6928 L20.1013333,12.192 L21.3568,11.248 Z M15.5946667,4.16426667 L15.6202667,2.59306667 L17.1050667,2.08213333 L15.6202667,1.5712 L15.5936,8.8817842e-16 L14.6506667,1.25546667 L13.1488,0.7968 L14.0512,2.0832 L13.1488,3.3696 L14.6506667,2.90773333 L15.5946667,4.16426667 Z M15.5946667,17.4442667 L15.6202667,15.8730667 L17.1050667,15.3621333 L15.6202667,14.8512 L15.5936,13.28 L14.6506667,14.5354667 L13.1488,14.0768 L14.0512,15.3632 L13.1488,16.6496 L14.6506667,16.1877333 L15.5946667,17.4442667 Z M19.9082667,6.09493333 L20.5973333,4.68373333 L19.1861333,5.3728 L18.0565333,4.28053333 L18.2773333,5.83466667 L16.8906667,6.57173333 L18.4384,6.84373333 L18.7104,8.39146667 L19.4453333,7.00373333 L21.0005333,7.22346667 L19.9082667,6.09493333 Z M11.2234667,6.81706667 L6.98773333,6.74666667 L5.61066667,2.74453333 L4.23466667,6.74773333 L-4.4408921e-16,6.8192 L3.38453333,9.3632 L2.14506667,13.4112 L5.6128,10.9802667 L9.0816,13.4090667 L7.84,9.36213333 L11.2234667,6.81706667 Z"></path>
                    </g>
                </g>
            </g>
        </svg>
    ),
    circleVietnam: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            {...props}
        >
            <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#a)">
                <path fill="#d80027" d="M0 0h512v512H0z" />
                <path
                    fill="#ffda44"
                    d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"
                />
            </g>
        </svg>
    ),
    circlePortugal: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            {...props}
        >
            <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#a)">
                <path fill="#6da544" d="M0 512h167l37.9-260.3L167 0H0z" />
                <path fill="#d80027" d="M512 0H167v512h345z" />
                <circle cx="167" cy="256" r="89" fill="#ffda44" />
                <path
                    fill="#d80027"
                    d="M116.9 211.5V267a50 50 0 1 0 100.1 0v-55.6H117z"
                />
                <path
                    fill="#eee"
                    d="M167 283.8c-9.2 0-16.7-7.5-16.7-16.7V245h33.4v22c0 9.2-7.5 16.7-16.7 16.7z"
                />
            </g>
        </svg>
    ),
    circleEnglish: ({ ...props }: LucideProps) => (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Group"
                    transform="translate(-0.000000, 0.000000)"
                    fillRule="nonzero"
                >
                    <path
                        d="M15.9997656,31.9995313 C24.8358862,31.9995313 31.9995313,24.8352612 31.9995313,15.9997656 C31.9995313,7.16427006 24.8365112,0 15.9997656,0 C7.16302008,0 0,7.16427006 0,15.9997656 C0,24.8352612 7.16427006,31.9995313 15.9997656,31.9995313 Z"
                        id="Path"
                        fill="#F0F0F0"
                    ></path>
                    <g transform="translate(0.000158, 0.000627)" id="Shape">
                        <path
                            d="M25.7413401,3.30682408 C24.0838516,2.03300867 22.1925266,1.09679538 20.1745467,0.551239447 L20.1745467,8.87424253 L25.7413401,3.30682408 Z M0.551709126,11.8310742 C1.09471125,9.81022095 2.03112357,7.91637005 3.30729376,6.25803085 L8.87471221,11.8310742 L0.551709126,11.8310742 Z M28.6931719,6.25803085 C29.9682418,7.91705587 30.9045415,9.81067889 31.4487565,11.8310742 L23.1245035,11.8310742 L28.6931719,6.25803085 Z M0.551709126,20.177202 L8.87471221,20.177202 L3.30791875,25.7396205 C2.03423836,24.0835826 1.09781836,22.1937554 0.551709126,20.177202 L0.551709126,20.177202 Z M6.25975051,28.6927022 C7.91738539,29.966283 9.80866198,30.9024723 11.826544,31.4482869 L11.826544,23.1284087 L6.25975051,28.6927022 Z M6.25975051,3.30682408 C7.91681624,2.03233049 9.80828123,1.09604788 11.826544,0.551239447 L11.826544,8.87424253 L6.25975051,3.30682408 Z M20.1732967,31.4482869 C22.1915594,30.9034784 24.0830244,29.9671958 25.7400902,28.6927022 L20.1732967,23.1302837 L20.1732967,31.4482869 Z M28.6912969,25.7414955 L23.1245035,20.1790769 L31.4468816,20.1790769 C30.9018153,22.1959064 29.9655301,24.0858903 28.6912969,25.7414955 Z"
                            fill="#0052B4"
                        ></path>
                        <path
                            d="M31.8643755,13.9110438 L18.0870773,13.9110438 L18.0870773,0.133120572 C16.7012997,-0.044373524 15.298541,-0.044373524 13.9127634,0.133120572 L13.9127634,13.9104188 L0.135465223,13.9104188 C-0.0451550744,15.2972504 -0.0451550744,16.7016509 0.135465223,18.0884826 L13.9127634,18.0884826 L13.9127634,31.8657807 C15.298541,32.0432748 16.7012997,32.0432748 18.0870773,31.8657807 L18.0870773,18.0884826 L31.8643755,18.0884826 C32.0449978,16.7018602 32.0449978,15.2976661 31.8643755,13.9110438 Z M20.1770467,20.177202 L27.3119421,27.3145974 L28.2525534,26.2833625 L22.1401429,20.177202 L20.1745467,20.177202 L20.1770467,20.177202 Z M4.68727355,27.3145974 L11.826544,20.177202 L11.826544,22.1415482 L5.71413351,28.2570836 L4.68727355,27.3145974 Z M11.825919,11.8216994 L4.68727355,4.68680387 L3.74978728,5.71803876 L9.86219775,11.8335742 L11.8302939,11.8335742 L11.825919,11.8216994 Z M27.3119421,4.68680387 L20.1745467,11.8216994 L20.1745467,9.85735313 L26.2869572,3.74181771 L27.3119421,4.68680387 Z"
                            fill="#D80027"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    ),
    homesly: ({ ...props }: LucideProps) => (
        <svg
            id="homely-logo"
            width="128"
            height="29"
            className={props.className}
        >
            <use xlinkHref="#icon-logo"></use>
        </svg>
    ),
};

export function getIcon(icon: keyof typeof Icons) {
    return Icons[icon];
}
