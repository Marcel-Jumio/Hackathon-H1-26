import { Actor } from 'xstate';
import { AnyEventObject } from 'xstate';
import { BehaviorSubject } from 'rxjs';
import { Container } from 'inversify';
import type { createStore } from '@ngneat/elf';
import { CSSResult } from 'lit';
import { EventObject } from 'xstate';
import { Factory } from 'inversify';
import { identity } from 'rxjs';
import { LitElement } from 'lit';
import { MachineContext } from 'xstate';
import { MetaObject } from 'xstate';
import { NonReducibleUnknown } from 'xstate';
import { nothing } from 'lit';
import { Observable } from 'rxjs';
import { PropertyValues } from 'lit';
import type { PropsFactory } from '@ngneat/elf';
import { QRCodeRenderersOptions } from 'qrcode';
import { QRCodeSegment } from 'qrcode';
import { ReactiveController } from 'lit';
import type { ReactiveControllerHost } from 'lit';
import { ReactiveElement } from 'lit';
import { Ref } from 'lit/directives/ref.js';
import { Ref as Ref_2 } from 'lit-html/directives/ref.js';
import { ServiceIdentifier } from 'inversify';
import { StateMachine } from 'xstate';
import { Static } from '@sinclair/typebox';
import { Store } from '@ngneat/elf';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { SVGTemplateResult } from 'lit';
import { TArray } from '@sinclair/typebox';
import { TBoolean } from '@sinclair/typebox';
import { TDate } from '@sinclair/typebox';
import { TemplateResult } from 'lit-html';
import { TemplateResult as TemplateResult_2 } from 'lit';
import { TIntersect } from '@sinclair/typebox';
import { TLiteral } from '@sinclair/typebox';
import { TNumber } from '@sinclair/typebox';
import { TObject } from '@sinclair/typebox';
import { TOptional } from '@sinclair/typebox';
import { TRecord } from '@sinclair/typebox';
import { TSchema } from '@sinclair/typebox';
import { TString } from '@sinclair/typebox';
import { TTemplateLiteral } from '@sinclair/typebox';
import { TTransform } from '@sinclair/typebox';
import { TUndefined } from '@sinclair/typebox';
import { TUnion } from '@sinclair/typebox';
import { TUnknown } from '@sinclair/typebox';
import { TUnsafe } from '@sinclair/typebox';
import { UnaryFunction } from 'rxjs';
import type { ValueError } from '@sinclair/typebox/errors';

export declare type AcceptableConsentItem = Static<typeof TbAcceptableConsentItemSchema>;

export declare const acceptedMatchedId: EventDispatcher<    {
timestamp: number;
IDshareConsent: string;
idType?: string;
}>;

export declare type AcquisitionStatus = Static<typeof TbAcquisitionStatusSchema>;

export declare const AcquisitionStatusEnum: {
    readonly Failed: "FAILED";
    readonly NotStarted: "NOT_STARTED";
    readonly Pending: "PENDING";
    readonly Retry: "RETRY";
    readonly Success: "SUCCESS";
};

export declare interface AcquisitionStatusResponse {
    status: AcquisitionStatus;
    error?: FetchError;
}

export declare type ActiveScreen = Static<typeof TbActiveScreenSchema>;

export declare type ActiveScreenActions = Static<typeof TbActiveScreenActionsSchema>;

export declare const ActiveScreenActionsEnum: {
    readonly NavigateToWorkflow: "active-screen-navigate-to-workflow";
    readonly NavigateToCrossDevice: "active-screen-navigate-to-cross-device";
};

export declare const ActiveScreenEnum: {
    readonly Workflow: "workflow";
    readonly CrossDevice: "cross-device";
};

export declare type ActiveTrackState = Pick<MediaStreamTrack, 'contentHint' | 'enabled' | 'id' | 'kind' | 'label' | 'muted' | 'readyState'> & {
    capabilities: MediaTrackCapabilities;
    constraints: MediaTrackConstraints;
    settings: MediaTrackSettings;
};

export declare const aggregatedFeedback$: Observable<AutocaptureFeedback | undefined>;

export declare const aleKeyNotValid: ErrorCase;

export declare class AnalyticEvent<T extends AnalyticEventBody = AnalyticEventBody> extends CustomEvent<T> {
    constructor(detail: T);
}

export declare type AnalyticEventBody<ET extends EventType = EventType, EN extends string = string, M extends EventMetadata = EventMetadata> = EventBodyBase<ET, EN, M>;

export declare const analytics: {
    createWorkflowRestarted: EventCreator<"trace", "workflow restarted", EventMetadata>;
    workflowRestarted: EventDispatcher<EventMetadata>;
    generateFileUploadLoggerEvents: <T extends FileUploadEventName>(eventName: T) => [EventCreator<"trace", T, FileUploadEventMap[T]>, EventDispatcher<FileUploadEventMap[T]>];
    createSensorDataEvent: EventCreator<"trace", "sensor data", SensorData>;
    sensorData: EventDispatcher<SensorData>;
    createVideoPlayThrowsEvent: EventCreator<"trace", "video thrown an error", {
    name: string;
    message: string;
    stack?: string;
    state: unknown;
    }>;
    videoPlayThrows: EventDispatcher<    {
    name: string;
    message: string;
    stack?: string;
    state: unknown;
    }>;
    createCameraCaptureHintsShownEvent: EventCreator<"trace", "shown camera capture hints", {
    visible: boolean;
    }>;
    shownCameraCaptureHints: EventDispatcher<    {
    visible: boolean;
    }>;
    createFailedToFetchEvent: EventCreator<"trace", "failed to fetch", {
    error: FetchErrorParams;
    }>;
    failedToFetch: EventDispatcher<    {
    error: FetchErrorParams;
    }>;
    createLivenessManualSelfieFallbackEvent: EventCreator<"trace", "liveness - manual selfie fallback", {
    step: string;
    reason: string;
    }>;
    livenessManualSelfieFallback: EventDispatcher<    {
    step: string;
    reason: string;
    }>;
    createLivenessInitializedEvent: EventCreator<"trace", "liveness - initialized", {
    step: string;
    }>;
    livenessInitialized: EventDispatcher<    {
    step: string;
    }>;
    createLivenessModuleLoadingFailedEvent: EventCreator<"trace", "liveness - module loading failed", {
    step: string;
    }>;
    livenessModuleLoadingFailed: EventDispatcher<    {
    step: string;
    }>;
    createLivenessProgressEvent: EventCreator<"trace", "liveness - progress", {
    jliveProgressCurrentStep: number;
    jliveProgressStepsTotal: number;
    jLiveStepDuration: number;
    jLiveDuration: number;
    isFullscreen: boolean;
    cls?: CameraLivenessStatus;
    clsm?: CameraLivenessStatus;
    }>;
    livenessProgressEvent: EventDispatcher<    {
    jliveProgressCurrentStep: number;
    jliveProgressStepsTotal: number;
    jLiveStepDuration: number;
    jLiveDuration: number;
    isFullscreen: boolean;
    cls?: CameraLivenessStatus;
    clsm?: CameraLivenessStatus;
    }>;
    createAutocaptureStateChangeEvent: EventCreator<"trace", "id autocapture - state change event", {
    step: string;
    autocaptureState: string;
    autocaptureFallbackReason?: string;
    }>;
    autocaptureStateChangeEvent: EventDispatcher<    {
    step: string;
    autocaptureState: string;
    autocaptureFallbackReason?: string;
    }>;
    getEIDASUrlEvent: EventCreator<"trace", "get eIDAS url", EventMetadata>;
    getEidasUrl: EventDispatcher<EventMetadata>;
    EIDASSuccessEvent: EventCreator<"trace", "eIDAS success", EventMetadata>;
    eidasSuccess: EventDispatcher<EventMetadata>;
    EIDASFailedEvent: EventCreator<"trace", "eIDAS failed", EventMetadata>;
    eidasFailed: EventDispatcher<EventMetadata>;
    catchEIDASErrorEvent: EventCreator<"trace", "catch eIDAS error", {
    name?: string;
    message?: string;
    stack?: string;
    }>;
    catchEidasError: EventDispatcher<    {
    name?: string;
    message?: string;
    stack?: string;
    }>;
    createTrustCheckSuccessEvent: EventCreator<"trace", "trust check success", EventMetadata>;
    trustCheckSuccessEvent: EventDispatcher<EventMetadata>;
    createTrustCheckFailedEvent: EventCreator<"trace", "trust check failed", EventMetadata>;
    trustCheckFailedEvent: EventDispatcher<EventMetadata>;
    createTrustCheckUrlFetchEvent: EventCreator<"trace", "trust check url fetch", EventMetadata>;
    trustCheckUrlFetchEvent: EventDispatcher<EventMetadata>;
    createTrustCheckUrlFetchErrorEvent: EventCreator<"trace", "trust check url fetch error", {
    name?: string;
    message?: string;
    stack?: string;
    }>;
    trustCheckUrlFetchErrorEvent: EventDispatcher<    {
    name?: string;
    message?: string;
    stack?: string;
    }>;
    createTrustCheckStatusFetchErrorEvent: EventCreator<"trace", "trust check status fetch error", {
    name?: string;
    message?: string;
    stack?: string;
    }>;
    trustCheckStatusFetchErrorEvent: EventDispatcher<    {
    name?: string;
    message?: string;
    stack?: string;
    }>;
    createUnhandledrejectionEvent: EventCreator<"trace", "unhandled promise rejection", {
    name: string;
    message: string;
    stack?: string;
    }>;
    unhandledrejectionEvent: EventDispatcher<    {
    name: string;
    message: string;
    stack?: string;
    }>;
    createUncaughtErrorEvent: EventCreator<"trace", "uncaught error", {
    name: string;
    message: string;
    stack?: string;
    }>;
    uncaughtErrorEvent: EventDispatcher<    {
    name: string;
    message: string;
    stack?: string;
    }>;
    createRedirectionEvent: EventCreator<"trace", "redirect", {
    url: string;
    type: "ERROR" | "SUCCESS";
    errorCode?: string;
    }>;
    redirectionEvent: EventDispatcher<    {
    url: string;
    type: "ERROR" | "SUCCESS";
    errorCode?: string;
    }>;
    createCustomTranslationEvent: EventCreator<"trace", "custom translation", {
    customTranslation: string;
    }>;
    customTranslationEvent: EventDispatcher<    {
    customTranslation: string;
    }>;
    createCustomTranslationErrorEvent: EventCreator<"trace", "custom translation error", {
    message: string;
    error?: unknown;
    }>;
    customTranslationErrorEvent: EventDispatcher<    {
    message: string;
    error?: unknown;
    }>;
    createShownCameraAccessRequestScreenEvent: EventCreator<"screen", "camera access request", {
    kind: "denied" | "prompt";
    devices: MediaDeviceMetadata[];
    }>;
    shownCameraAccessRequestScreen: EventDispatcher<    {
    kind: "denied" | "prompt";
    devices: MediaDeviceMetadata[];
    }>;
    createShownFinishScreenEvent: EventCreator<"screen", "finish", {
    outcome: RequestOutcome<FinalizeResponse | undefined, unknown>;
    }>;
    shownFinishScreen: EventDispatcher<    {
    outcome: RequestOutcome<FinalizeResponse | undefined, unknown>;
    }>;
    createShownCrossDeviceScreenEvent: EventCreator<"screen", "cross device", EventMetadata>;
    shownCrossDeviceScreen: EventDispatcher<EventMetadata>;
    createShownCrossDeviceFinishScreenEvent: EventCreator<"screen", "cross device finish", {
    acquisitionStatus: AcquisitionStatus;
    error?: PublicError;
    }>;
    shownCrossDeviceFinishScreen: EventDispatcher<    {
    acquisitionStatus: AcquisitionStatus;
    error?: PublicError;
    }>;
    createShownErrorEvent: EventCreator<"screen", "error", EventMetadata>;
    shownError: EventDispatcher<EventMetadata>;
    getShownScreenEventReporter: (eventName: string) => [EventCreator<"screen", string, {
    acquisitionStatus: AcquisitionStatus;
    }>, EventDispatcher<    {
    acquisitionStatus: AcquisitionStatus;
    }>];
    shownIdLookupScreen: EventDispatcher<    {
    outcome: RequestOutcome<LookupResponse | undefined, unknown>;
    matchFound?: boolean;
    lookupDuration?: number;
    }>;
    createPublicErrorEvent: EventCreator<"screen", "public error", {
    errorCode: string;
    }>;
    publicError: EventDispatcher<    {
    errorCode: string;
    }>;
    createSelectedCountryEvent: EventCreator<"action", "selected country", {
    country: string | undefined;
    }>;
    selectedCountry: EventDispatcher<    {
    country: string | undefined;
    }>;
    createSelectedDocumentEvent: EventCreator<"action", "selected document", {
    document: string;
    digitalIdProvider?: string;
    }>;
    selectedDocument: EventDispatcher<    {
    document: string;
    digitalIdProvider?: string;
    }>;
    createClickedStartButtonEvent: EventCreator<"action", "clicked start button", EventMetadata>;
    clickedStartButton: EventDispatcher<EventMetadata>;
    createClickedRetryButtonEvent: EventCreator<"action", "clicked retry button", EventMetadata>;
    clickedRetryButton: EventDispatcher<EventMetadata>;
    createClickedCrossDeviceButtonEvent: EventCreator<"action", "clicked cross device button", EventMetadata>;
    clickedCrossDeviceButton: EventDispatcher<EventMetadata>;
    createClickedSendEmailButtonEvent: EventCreator<"action", "clicked send email button", EventMetadata>;
    clickedSendEmailButton: EventDispatcher<EventMetadata>;
    createEmailSentError: EventCreator<"action", "email sent error", EventMetadata>;
    emailSentError: EventDispatcher<EventMetadata>;
    createClickedContinueUploadButtonEvent: EventCreator<"action", "clicked continue button", {
    documentType?: string;
    pageCount?: number;
    }>;
    clickedContinueUploadButton: EventDispatcher<    {
    documentType?: string;
    pageCount?: number;
    }>;
    acceptedMatchedId: EventDispatcher<    {
    timestamp: number;
    IDshareConsent: string;
    idType?: string;
    }>;
    createChangeLanguage: EventCreator<"action", "change language", EventMetadata>;
    changeLanguage: EventDispatcher<EventMetadata>;
    createClickedUseAnotherIdButton: EventCreator<"action", "clicked use another ID button", EventMetadata>;
    clickedUseAnotherIdButton: EventDispatcher<EventMetadata>;
    createSettingsEvent: EventCreator<"arbitrary", "settings", {
    credentials: unknown;
    }>;
    settings: EventDispatcher<    {
    credentials: unknown;
    }>;
    createWrongSettingsEvent: EventCreator<"arbitrary", "wrong settings", (EventMetadata & WrongSettingsCritical) | (EventMetadata & WrongSettingsNonCritical)>;
    wrongSettings: EventDispatcher<(EventMetadata & WrongSettingsCritical) | (EventMetadata & WrongSettingsNonCritical)>;
    createRuntimeEvent: EventCreator<"arbitrary", "runtime", EventMetadata>;
    runtime: EventDispatcher<EventMetadata>;
    createShownConsentMessageEvent: EventCreator<"arbitrary", "shown consent message", EventMetadata>;
    shownConsentMessage: EventDispatcher<EventMetadata>;
    createUsedCaptureTypesEvent: EventCreator<"arbitrary", "capture types", {
    livenessCaptureType?: LivenessCaptureTypes;
    idCaptureType?: IdCaptureTypes;
    xDeviceJourney: boolean;
    usedAllCaptureTypes: (IdCaptureTypes | LivenessCaptureTypes)[];
    }>;
    usedCaptureTypesEvent: EventDispatcher<    {
    livenessCaptureType?: LivenessCaptureTypes;
    idCaptureType?: IdCaptureTypes;
    xDeviceJourney: boolean;
    usedAllCaptureTypes: (IdCaptureTypes | LivenessCaptureTypes)[];
    }>;
};

export declare class AppContainerComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    config: AppContainerConfig;
    activeConfig: AppContainerConfigFull;
    readonly layout$: Observable<AppContainerLayout>;
    readonly layoutController: AsyncController<AppContainerLayout, true>;
    constructor();
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1> | typeof nothing;
}

export declare interface AppContainerConfig {
    headerVisible?: boolean;
    footerVisible?: boolean;
    layoutType?: AppContainerLayoutType;
    cameraFilterFn?: CameraFilterFn | undefined;
}

declare type AppContainerConfigFull = DeepRequired<Omit<AppContainerConfig, 'cameraFilterFn'>> & Pick<AppContainerConfig, 'cameraFilterFn'>;

export declare type AppContainerLayout = AppContainerLayoutCaptureScreen | AppContainerLayoutGeneric;

export declare interface AppContainerLayoutCaptureScreen {
    type: typeof AppContainerLayoutTypeEnum.CaptureScreen;
    variant: AppContainerLayoutCaptureScreenVariant;
}

export declare type AppContainerLayoutCaptureScreenVariant = Static<typeof TbAppContainerLayoutCaptureScreenVariantSchema>;

export declare const AppContainerLayoutCaptureScreenVariantEnum: {
    readonly Small: "small";
    readonly Large: "large";
};

export declare interface AppContainerLayoutGeneric {
    type: typeof AppContainerLayoutTypeEnum.Generic;
}

export declare type AppContainerLayoutType = Static<typeof TbAppContainerLayoutTypeSchema>;

export declare const AppContainerLayoutTypeEnum: {
    readonly Generic: "generic";
    readonly CaptureScreen: "capture-screen";
};

export declare interface AppDisplayMode {
    fullscreen: boolean;
    standalone: boolean;
    minimalUI: boolean;
    browser: boolean;
    windowControlsOverlay: boolean;
}

declare const appleOs: readonly ["macos", "ios", "ipad"];

declare type AppleOsNames = (typeof appleOs)[number];

export declare const areAllActiveConsentsGiven$: () => Observable<boolean>;

export declare const areWorkflowSetupParametersValid$: () => Observable<boolean>;

export declare const areWorkflowSetupParametersValid: (params?: unknown) => boolean;

export declare const asyncAnimationFrame: (callback: AsyncCallback) => Promise<void>;

declare type AsyncCallback = () => void;

declare class AsyncController<T, HasInitial extends boolean = false> implements ReactiveController {
    #private;
    constructor(host: ReactiveControllerHost, source$: Observable<T>);
    constructor(host: ReactiveControllerHost, source$: Observable<T>, value: T);
    hostConnected(): void;
    hostDisconnected(): void;
    get value(): HasInitial extends true ? T : T | undefined;
}

export declare const authFailed: ErrorCase;

export declare type AutocaptureConditionCallback = (params: AutocaptureStore) => boolean;

export declare type AutocaptureDocClassifierData = Static<typeof TbAutocaptureDocClassifierDataSchema>;

export declare interface AutocaptureDocClassifierExtendedData extends AutocaptureDocClassifierData {
    impliedDocumentSide?: PhysicalDocumentSideClassifier | undefined;
}

export declare interface AutocaptureDocCornerData {
    topLeft: AutocaptureDocXY;
    topRight: AutocaptureDocXY;
    bottomLeft: AutocaptureDocXY;
    bottomRight: AutocaptureDocXY;
}

export declare interface AutocaptureDocPose extends AutocaptureDocClassifierData {
    timestamp: number;
    cornerData: AutocaptureDocCornerData;
    middlePoint: AutocaptureDocXY;
    width: number;
    height: number;
    aspectRatio: number;
    shift: number;
}

export declare interface AutocaptureDocXY {
    x: number;
    y: number;
}

export declare interface AutocaptureFallbackToManualCaptureOnUserStrugglingParams {
    smoothedFeedback$: Observable<AutocaptureFeedback | undefined>;
    uniqueMessageCount?: number;
    debounceTimeMs?: number;
}

export declare interface AutocaptureFeedback {
    cornersVisible: boolean;
    closeEnough: boolean;
    farEnough: boolean;
    middlePointAligned: boolean;
}

export declare interface AutocaptureGetPoseFeedbackParameters {
    pose$: Observable<AutocaptureDocPose | undefined>;
    docFinder$: Observable<AutocaptureStateDocFinderPosition>;
    videoResolution$: Observable<Resolution>;
}

export declare type AutocaptureState = Static<typeof TbAutocaptureStateSchema>;

export declare const autocaptureStateChangeEvent: EventDispatcher<    {
step: string;
autocaptureState: string;
autocaptureFallbackReason?: string;
}>;

export declare interface AutocaptureStateDocFinderPosition {
    type: typeof AutocaptureStateTypeEnum.DocFinder;
    edgeMarginRatio: number;
    minFillRatio: number;
    maxFillRatio: number;
    cx: number;
    cy: number;
    radius: number;
}

export declare const AutocaptureStateEnum: {
    readonly NOT_LOADED: "not-loaded";
    readonly LOADING: "loading";
    readonly ACTIVE: "active";
    readonly MANUAL_CAPTURE_FALLBACK: "manual-capture-fallback";
};

export declare type AutocaptureStateType = Static<typeof TbAutocaptureStateTypeSchema>;

export declare const AutocaptureStateTypeEnum: {
    readonly DocFinder: "doc-finder";
};

export declare interface AutocaptureStore {
    activationTime?: number;
    docFinder: AutocaptureStateDocFinderPosition;
    fallbackReason?: ManualCaptureFallbackReason;
    feedback: AutocaptureFeedback | undefined;
    fps?: number;
    smoothedFeedback: AutocaptureFeedback | undefined;
    state: AutocaptureState;
    docClassifierCurrent?: AutocaptureDocClassifierData | undefined;
}

declare interface AutocaptureTrackerBackdrop {
    visible?: boolean;
    color?: string;
}

declare interface AutocaptureTrackerBorderConfig {
    widthRatio?: number;
    color?: string;
    radiusRatio?: number;
}

export declare interface AutocaptureTrackerConfig {
    message?: IdCaptureMessage;
    activeBorder?: AutocaptureTrackerBorderConfig;
    inactiveBorder?: AutocaptureTrackerBorderConfig;
    placeholder?: AutocaptureTrackerPlaceholder;
    backdrop?: AutocaptureTrackerBackdrop;
    capturing?: boolean;
    idCardAspectRatio?: number;
    isDebugging?: boolean;
}

declare interface AutocaptureTrackerPlaceholder {
    visible?: boolean;
    side?: IdSide;
    alpha?: number;
    fillFactor?: number;
    debounceTimeMs?: number;
}

export declare interface AutocaptureWorkerProcessedMessageCallback {
    messageNotifier$: Subject<DaOutputEvent>;
    errorNotifier$: Subject<unknown>;
    docPoseNotifier$: Subject<AutocaptureDocPose | undefined>;
    initializedSuccessfully?: () => void;
}

export declare class BackdropComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    clickToClose: boolean;
    hidden: boolean;
    dialogRole?: 'alertdialog' | 'dialog';
    ariaLabelledBy: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}

export declare interface BackupEntry {
    backupGuid: string;
    workflowState: WorkflowState;
    navigationStep: NavigationStep;
}

export declare interface BackupEntryDescriptor extends BackupEntry {
    descriptor: string;
}

export declare const backupRestoreState: (storesToIgnore?: string[]) => `${string}-${string}-${string}-${string}-${string}`;

export declare abstract class BaseComponent extends LitElement {
    static styles: CSSResult[];
    colorScheme: ColorScheme;
}

declare interface BaseEvent<T> extends EventLike<T>, TimestampLike {
}

export declare const blockingNetworkError: ErrorCase;

declare type Builtin = Date | Error | Function | Primitive | RegExp;

export declare class ButtonClickEvent extends CustomEvent<Event> {
    constructor(detail: Event);
}

export declare type ButtonClickEventHandler = (e: ButtonClickEvent) => void;

export declare class ButtonComponent extends BaseComponent {
    static styles: CSSResult[];
    fluid: boolean;
    type: ButtonType;
    size: ButtonSize;
    shape: ButtonShape;
    padding: boolean;
    disabled: boolean;
    label: string;
    render(): TemplateResult<1>;
    handleClickEvent(event: Event): void;
}

export declare type ButtonShape = Static<typeof TbButtonShapeSchema>;

export declare const ButtonShapeEnum: {
    readonly Default: "default";
    readonly Round: "round";
};

export declare type ButtonSize = Static<typeof TbButtonSizeSchema>;

export declare const ButtonSizeEnum: {
    readonly Small: "small";
    readonly Medium: "medium";
    readonly Large: "large";
    readonly ExtraLarge: "extra-large";
};

export declare type ButtonType = Static<typeof TbButtonTypeSchema>;

export declare const ButtonTypeEnum: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Tertiary: "tertiary";
    readonly Quiet: "quiet";
    readonly QuietIcon: "quiet-icon";
    readonly Destructive: "destructive";
};

export declare const cameraCapture: EventDispatcher<    {
cameraState: {
resolution: Resolution;
activeTrackState: ActiveTrackState | undefined;
cameraFacingMode: CameraFacingMode;
isPlaying: boolean;
isBusy: boolean;
};
deviceListState: DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
};
permissionState: PermissionStore;
cameraSelectorDeviceList: {
devices: JMediaDeviceInfo[];
currentDevice: JMediaDeviceInfo | undefined;
isBusy: boolean;
};
} & {
idSharpness?: unknown;
idAutocapture?: boolean;
idAutocaptureState?: unknown;
idAutocaptureFallbackReason?: string;
timeSpentInStepMs?: number;
cls?: CameraLivenessStatus;
clsm?: CameraLivenessStatus;
docClassifier?: unknown;
classifier?: Classifier;
}>;

export declare type CameraCaptureIdAutocaptureStateLogEvent = 'auto-capture' | 'manual-capture-fallback' | 'manual-capture';

export declare interface CameraCapturingEngine {
    getImageData: GetImageDataCallback;
    getBlob: GetBlobCallback;
}

export declare interface CameraCapturingEngineGetBlobParams {
    imageType?: ToBlobSupportedImageType;
    quality?: number;
    sinceTimestamp?: number;
}

export declare interface CameraCapturingEngineGetBlobResult {
    timestamp: number;
    blob: Blob;
    width: number;
    height: number;
}

export declare interface CameraCapturingEngineGetBlobResultWithClassifier extends CameraCapturingEngineGetBlobResult {
    classifier: Classifier;
    usabilityExpected: boolean;
}

export declare interface CameraCapturingEngineGetImageDataParams {
    sinceTimestamp?: number;
}

export declare interface CameraCapturingEngineGetImageDataResult {
    timestamp: number;
    imageData: ImageData;
}

export declare class CameraComponent extends BaseComponent implements CameraRenderingEngine, CameraCapturingEngine {
    #private;
    static styles: CSSResult[];
    applyConstraintCallback?: ConstraintsApply;
    videoConstraints: GetMediaTrackConstraintSet;
    backdropRenderingEngineCollection: CameraRenderingEngine[];
    videoBackdropRenderingEngineCollection: CameraRenderingEngine[];
    videoEngineRenderingCollection: CameraRenderingEngine[];
    videoOverlayRenderingEngineCollection: CameraRenderingEngine[];
    overlayRenderingEngineCollection: CameraRenderingEngine[];
    semanticRenderingEngineCollection: CameraRenderingEngine[];
    readonly videoRef: Ref_2<HTMLVideoElement>;
    readonly canvasRendererRef: Ref_2<CameraRendererComponent>;
    readonly controller: CameraComponentController;
    originalResolution: Resolution | undefined;
    constructor();
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    switchStream: (e: SwitchCameraCommand | SwitchStreamCommand) => Promise<VideoSource | undefined>;
    onVideoTick: VideoTickCallback;
    onYuvProcessorAvailable: GetYuvProcessorCallback;
    getImageData: GetImageDataCallback;
    getBlob: GetBlobCallback;
    captureImage: GetBlobCallback;
    getVideoElement: () => HTMLVideoElement;
    hasFlash(): boolean;
    setFlashState(isEnabled: boolean): Promise<void>;
}

export declare class CameraComponentController implements ReactiveController {
    #private;
    constructor(host: CameraComponent);
    hostConnected(): void;
    restartStream(params: SwitchStreamCommand): Promise<VideoSource | undefined>;
    stopStream({ videoSource, resetBusyState }: Pick<StopStreamParams, 'resetBusyState' | 'videoSource'>): void;
    onVideoTick: VideoTickCallback;
    onYuvProcessorAvailable: GetYuvProcessorCallback;
    getCanvasProcessorCollection(): CameraRenderingEngine[];
}

export declare class CameraError extends DOMException {
    constructor(message?: string);
}

export declare const CameraErrorName = "CameraError";

export declare type CameraFacingMode = Static<typeof TbCameraFacingModeSchema>;

export declare const CameraFacingModeEnum: {
    readonly Front: "front";
    readonly Back: "back";
    readonly NotAvailable: "not-available";
};

export declare const cameraFilterFn$: BehaviorSubject<CameraFilterFn | undefined>;

export declare type CameraFilterFn = (device: JMediaDeviceInfo | MediaDeviceInfo) => boolean | undefined;

export declare class CameraIconComponent extends BaseComponent {
    static styles: CSSResult[];
    selected: boolean;
    enabled: boolean;
    label: string;
    info: string;
    render(): TemplateResult<1>;
}

export declare const cameraInitializing: EventDispatcher<EventMetadata>;

export declare class CameraInternalLayoutComponent extends BaseComponent {
    static styles: CSSResult[];
    readonly containerElRef: Ref_2<HTMLDivElement>;
    readonly refresh$: Subject<void>;
    readonly size$: Observable<VideoSizeInfo>;
    readonly sizeController: AsyncController<VideoSizeInfo, false>;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}

export declare class CameraLifecycleComponent extends LitElement {
    #private;
    static styles: CSSResult[];
    set videoElement(value: HTMLVideoElement | undefined);
    get videoElement(): HTMLVideoElement | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updatePlayingStatusVideo$: () => Observable<Partial<CameraStoreState>>;
    render(): TemplateResult<1>;
}

declare type CameraLivenessStatus = CameraLivenessStatusWithDuplicates | CameraLivenessStatusWithoutDuplicates;

declare interface CameraLivenessStatusBase<T extends boolean = false> {
    t: number;
    l?: string;
    y: T;
}

declare interface CameraLivenessStatusWithDuplicates extends CameraLivenessStatusBase<true> {
    p: number;
    q: number;
}

declare type CameraLivenessStatusWithoutDuplicates = CameraLivenessStatusBase;

export declare class CameraLoggerComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    debounceTime: number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
}

export declare const cameraMediaStreamTrack$: BehaviorSubject<MediaStreamTrack | undefined>;

export declare const cameraMediaStreamTrackProcessor$: BehaviorSubject<MediaStreamTrackProcessor<VideoFrame> | undefined>;

export declare const cameraPlaying: EventDispatcher<    {
cameraState: {
resolution: Resolution;
activeTrackState: ActiveTrackState | undefined;
cameraFacingMode: CameraFacingMode;
isPlaying: boolean;
isBusy: boolean;
};
deviceListState: DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
};
permissionState: PermissionStore;
cameraSelectorDeviceList: {
devices: JMediaDeviceInfo[];
currentDevice: JMediaDeviceInfo | undefined;
isBusy: boolean;
};
}>;

export declare interface CameraPlayParams<T extends MediaStreamConstraints = MediaStreamConstraints> {
    constraints: T;
    applyConstraints?: ConstraintsApply;
    timeoutMs?: number;
}

export declare class CameraRendererComponent extends LitElement implements CameraRenderingEngine, CameraCapturingEngine {
    #private;
    static styles: CSSResult[];
    originalResolution: Resolution | undefined;
    targetResolution: Resolution | undefined;
    flipped: boolean;
    fitMode: CanvasFitMode;
    allowWebp: boolean;
    render(): TemplateResult<1>;
    onVideoTick: VideoTickCallback;
    getImageData: GetImageDataCallback;
    getBlob: GetBlobCallback;
}

export declare interface CameraRenderingEngine {
    onVideoTick?: VideoTickCallback;
    onYuvProcessorAvailable?: GetYuvProcessorCallback;
}

export declare class CameraSelectorComponent extends BaseComponent {
    #private;
    orientation: CameraSelectorOrientation;
    set cameraFilterFn(value: CameraFilterFn | undefined);
    get cameraFilterFn(): CameraFilterFn | undefined;
    disconnectedCallback(): void;
    update(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}

export declare type CameraSelectorOrientation = Static<typeof TbCameraSelectorOrientationSchema>;

export declare const CameraSelectorOrientationEnum: {
    readonly Vertical: "vertical";
    readonly Horizontal: "horizontal";
};

export declare const cameraStateChanged: EventDispatcher<    {
cameraState: {
resolution: Resolution;
activeTrackState: ActiveTrackState | undefined;
cameraFacingMode: CameraFacingMode;
isPlaying: boolean;
isBusy: boolean;
};
deviceListState: DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
};
permissionState: PermissionStore;
cameraSelectorDeviceList: {
devices: JMediaDeviceInfo[];
currentDevice: JMediaDeviceInfo | undefined;
isBusy: boolean;
};
}>;

export declare const cameraStoreReset: () => void;

export declare interface CameraStoreState {
    resolution: Resolution;
    activeTrackState: ActiveTrackState | undefined;
    cameraFacingMode: CameraFacingMode;
    isPlaying: boolean;
    isBusy: boolean;
}

export declare class CameraVideoTickerComponent extends LitElement {
    #private;
    static styles: CSSResult[];
    set videoElement(value: HTMLVideoElement | undefined);
    get videoElement(): HTMLVideoElement | undefined;
    set videoTickCallback(value: VideoTickCallback | undefined);
    get videoTickCallback(): VideoTickCallback | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
}

export declare const cancelTypeUser: ErrorCase;

export declare type CanvasFitMode = Static<typeof TbCanvasFitModeSchema>;

export declare const CanvasFitModeEnum: {
    readonly Contain: "contain";
    readonly Cover: "cover";
};

export declare class CaptureButtonComponent extends BaseComponent {
    static styles: CSSResult[];
    config: CaptureButtonConfig;
    protected activeConfig: {
        disabled: boolean;
        inactive: boolean;
        ariaLabel: string;
        pulsing: boolean;
    };
    willUpdate(changedProperties: PropertyValues<this>): void;
    update(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
    handleClickEvent(event: Event): void;
}

export declare interface CaptureButtonConfig {
    disabled?: boolean;
    inactive?: boolean;
    ariaLabel?: string;
    pulsing?: boolean;
}

export declare type CaptureLabelAriaLive = 'assertive' | 'off' | 'polite';

export declare class CaptureLabelComponent extends BaseComponent {
    static styles: CSSResult[];
    config: CaptureLabelConfig;
    protected activeConfig: DeepRequired<CaptureLabelConfig>;
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}

export declare interface CaptureLabelConfig {
    background?: string;
    progress?: CaptureLabelProgressConfig;
    ariaLive?: CaptureLabelAriaLive;
    ariaAtomic?: boolean;
    ariaRole?: string;
    size?: CaptureLabelSize;
}

export declare interface CaptureLabelProgressConfig {
    progressColor1?: string;
    progressColor2?: string;
    value?: number;
}

export declare type CaptureLabelSize = Static<typeof TbCaptureLabelSizeSchema>;

export declare const CaptureLabelSizeEnum: {
    readonly Medium: "medium";
    readonly Large: "large";
};

export declare class CaptureMessageContainerComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    feedbackItems?: HTMLElement[];
    middleItems?: HTMLElement[];
    render(): TemplateResult<1>;
}

declare interface CaptureRequest {
    dateNow: number;
    performanceNow: number;
    autocapture: boolean;
    autocaptureFps?: number;
    docClassifier?: AutocaptureDocClassifierData;
    classifier: Classifier;
}

export declare class CardClickEvent extends CustomEvent<Event> {
    constructor(detail: Event);
}

export declare class CardComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    type: CardType;
    header: string;
    subheader: string;
    tag: string;
    size: CardSize;
    disabled: boolean;
    iconElements: HTMLElement[];
    render(): TemplateResult_2<1> | symbol;
}

export declare class CardGroupComponent extends BaseComponent {
    static styles: CSSResult[];
    label: string;
    firstUpdated(): void;
    render(): TemplateResult<1>;
}

export declare class CardLightComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult<1>;
}

export declare class CardListComponent extends BaseComponent {
    static styles: CSSResult[];
    headerElements: HTMLElement[];
    footerElements: HTMLElement[];
    render(): TemplateResult<1>;
}

export declare type CardSize = Static<typeof TbCardSizeSchema>;

export declare const CardSizeEnum: {
    readonly Small: "small";
    readonly Medium: "medium";
    readonly Large: "large";
};

export declare type CardType = Static<typeof TbCardTypeSchema>;

export declare const CardTypeEnum: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Tertiary: "tertiary";
};

export declare class CarrouselComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    innerWrapperEl: HTMLElement | null;
    outerWrapperEl: HTMLElement | null;
    images: HTMLImageElement[];
    offset: number;
    tileWidth: number;
    tileHeight: number;
    getOffsetTranslateX(): string;
    isNavigationForwardEnabled(): boolean;
    isNavigationBackwardEnabled(): boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    isScrollingAvailable(): boolean;
    navigateTo(offset: number): void;
    render(): TemplateResult<1>;
}

export declare class CarrouselNavigationEvent extends CustomEvent<number> {
    constructor(detail: number);
}

export declare const catchEidasError: EventDispatcher<    {
name?: string;
message?: string;
stack?: string;
}>;

export declare const catchEIDASErrorEvent: EventCreator<"trace", "catch eIDAS error", {
name?: string;
message?: string;
stack?: string;
}>;

export declare enum Category {
    Id = "ID",
    Facemap = "FACEMAP",
    Document = "DOCUMENT",
    Data = "DATA"
}

export declare const ccrLoadingFailed: ErrorCase;

export declare const certificateError: ErrorCase;

export declare const changeLanguage: EventDispatcher<EventMetadata>;

export declare interface CheckUsabilityParams {
    resultKey: string;
}

export declare interface CheckUsabilityParamsWithId {
    id: UUID;
    usability: CheckUsabilityParams;
}

export declare class CircularProgressIndicatorComponent extends BaseComponent {
    static styles: CSSResult[];
    config: CircularProgressIndicatorConfig;
    activeConfig: {
        size: number;
        fillRadius: number;
        fillWidth: number;
        fillColor: string;
        trackRadius: number;
        trackWidth: number;
        trackColor: string;
        underlayRadius: number;
        underlayColor: string;
        progress: number;
    };
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}

export declare interface CircularProgressIndicatorConfig {
    size?: number;
    fillRadius?: number;
    fillWidth?: number;
    fillColor?: string;
    trackRadius?: number;
    trackWidth?: number;
    trackColor?: string;
    underlayRadius?: number;
    underlayColor?: string;
    progress?: number;
}

export declare type Classifier = Static<typeof TbClassifierSchema>;

export declare const ClassifierEnum: {
    readonly CnhPdf: "CNH_PDF";
    readonly Document: "DOCUMENT";
    readonly Face: "FACE";
    readonly Data: "DATA";
    readonly IdFrontWithFlash: "FRONT_WITH_FLASH";
    readonly JumioLivenessBlob: "JUMIO_LIVENESS_BLOB";
    readonly FrontSide: "FRONTSIDE";
    readonly BackSide: "BACKSIDE";
};

export declare const classifierFilter: (classifier: Classifier) => FindFileMetadataByParamsCallback;

declare interface ClassifierWithUploadState {
    credentialId: UUID;
    classifier: Classifier;
    acceptedFileTypes: string;
    file: FileStoreEntity;
    multipartFileOverrides?: Partial<MultipartFile>;
    isEnabled: boolean;
    isRequired: boolean;
}

export declare const clickedContinueUploadButton: EventDispatcher<    {
documentType?: string;
pageCount?: number;
}>;

export declare const clickedCrossDeviceButton: EventDispatcher<EventMetadata>;

export declare const clickedRetryButton: EventDispatcher<EventMetadata>;

export declare const clickedSendEmailButton: EventDispatcher<EventMetadata>;

export declare const clickedStartButton: EventDispatcher<EventMetadata>;

export declare const clickedUseAnotherIdButton: EventDispatcher<EventMetadata>;

export declare const clsAppendItem: (item: CameraLivenessStatus) => void;

export declare const clsr: () => void;

export declare type ColorScheme = Static<typeof TbColorSchemeSchema>;

export declare class ColorSchemeComponent extends LitElement {
    #private;
    static styles: CSSResult[];
    colorSchemeService: ColorSchemeService;
    colorScheme: ColorScheme;
    colorSchemeConfigs: ColorSchemeConfig[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    getBrowserColorScheme(): ColorScheme;
    render(): TemplateResult<1>;
    applyColorScheme(): void;
}

export declare interface ColorSchemeConfig {
    colorScheme: ColorScheme;
}

export declare class ColorSchemeConfigComponent extends LitElement implements ColorSchemeConfig {
    colorScheme: ColorScheme;
}

export declare const colorSchemeContext: {
    __context__: "light" | "dark" | "auto";
};

export declare const ColorSchemeEnum: {
    readonly Light: "light";
    readonly Dark: "dark";
    readonly Auto: "auto";
};

export declare class ColorSchemeService {
    #private;
    readonly colorScheme$: Observable<ColorScheme>;
    constructor();
    setUserColorScheme(value: ColorScheme): void;
    setBrowserColorScheme(value: ColorScheme): void;
    getColorScheme(): ColorScheme;
}

export declare const colorSchemeServiceContext: {
    __context__: ColorSchemeService;
};

declare interface ComponentControllerProvider<TComponentController> {
    readonly componentController: TComponentController;
}

declare enum ConfigName {
    IdFinderLiveness = "id_finder_liveness",
    PremiumWeb = "premium_web",
    StandardWeb = "standard_web"
}

export declare type ConfigurationAutocaptureSettings = Static<typeof TbConfigurationAutocaptureSettingsSchema>;

export declare type ConfigurationDatadog = Static<typeof TbConfigurationDatadogSchema>;

export declare type ConfigurationFileUpload = Static<typeof TbConfigurationFileUploadSchema>;

export declare type ConfigurationHelpScreen = Static<typeof TbConfigurationHelpScreenSchema>;

export declare type ConfigurationIdSharpness = Static<typeof TbConfigurationIdSharpnessSchema>;

export declare type Configurations = Static<typeof TbConfigurationsSchema>;

export declare type ConfigurationsLike = Static<typeof TbConfigurationsLikeSchema>;

export declare type ConfigurationSupplementalImage = Static<typeof TbConfigurationSupplementalImageSchema>;

export declare type ConfigurationSupplementalImageSequence = Static<typeof TbConfigurationSupplementalImageSequenceSchema>;

export declare type ConfigurationSupplementalImagesV2 = Static<typeof TbConfigurationSupplementalImagesV2Schema>;

export declare type ConfigurationSupplementalImageWithFlash = Static<typeof TbConfigurationSupplementalImageWithFlashSchema>;

export declare class ConsentChangeEvent extends CustomEvent<ConsentData> {
    constructor(detail: ConsentData);
}

export declare interface ConsentData {
    consentGiven: boolean;
    timestamp: number;
    id: string;
}

export declare type ConsentDisplayType = Static<typeof TbConsentDisplayTypeSchema>;

export declare const ConsentDisplayTypeEnum: {
    readonly Passive: "PASSIVE";
    readonly Active: "ACTIVE";
};

export declare type ConsentItem = Static<typeof TbConsentItemSchema>;

export declare type ConsentItemCollection = Static<typeof TbConsentItemCollectionSchema>;

export declare class ConsentPolicyComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    locale: Locale;
    consentDto: ConsentItem[];
    consentGiven: boolean;
    render(): TemplateResult<1>;
}

export declare class ConsentSubmissionError extends FetchError {
}

export declare const consentSubmissionError: ErrorCase;

export declare type ConstraintsApply = (params: ConstraintsParams) => Promise<MediaTrackSettings>;

export declare interface ConstraintsParams {
    stream: MediaStream;
    track: MediaStreamTrack;
}

declare type ControllerProvider<TWorkflowStepController, TComponentController> = ComponentControllerProvider<TComponentController> & WorkflowStepControllerProvider<TWorkflowStepController>;

declare interface Country {
    code: CountryCode;
    label: string;
}

export declare type CountryCode = Static<typeof TbCountryCodeSchema>;

export declare const CountryCodeEnum: {
    readonly ABW: "ABW";
    readonly AFG: "AFG";
    readonly AGO: "AGO";
    readonly AIA: "AIA";
    readonly ALA: "ALA";
    readonly ALB: "ALB";
    readonly AND: "AND";
    readonly ARE: "ARE";
    readonly ARG: "ARG";
    readonly ARM: "ARM";
    readonly ASM: "ASM";
    readonly ATA: "ATA";
    readonly ATF: "ATF";
    readonly ATG: "ATG";
    readonly AUS: "AUS";
    readonly AUT: "AUT";
    readonly AZE: "AZE";
    readonly BDI: "BDI";
    readonly BEL: "BEL";
    readonly BEN: "BEN";
    readonly BES: "BES";
    readonly BFA: "BFA";
    readonly BGD: "BGD";
    readonly BGR: "BGR";
    readonly BHR: "BHR";
    readonly BHS: "BHS";
    readonly BIH: "BIH";
    readonly BLM: "BLM";
    readonly BLR: "BLR";
    readonly BLZ: "BLZ";
    readonly BMU: "BMU";
    readonly BOL: "BOL";
    readonly BRA: "BRA";
    readonly BRB: "BRB";
    readonly BRN: "BRN";
    readonly BTN: "BTN";
    readonly BVT: "BVT";
    readonly BWA: "BWA";
    readonly CAF: "CAF";
    readonly CAN: "CAN";
    readonly CCK: "CCK";
    readonly CHE: "CHE";
    readonly CHL: "CHL";
    readonly CHN: "CHN";
    readonly CIV: "CIV";
    readonly CMR: "CMR";
    readonly COD: "COD";
    readonly COG: "COG";
    readonly COK: "COK";
    readonly COL: "COL";
    readonly COM: "COM";
    readonly CPV: "CPV";
    readonly CRI: "CRI";
    readonly CUB: "CUB";
    readonly CUW: "CUW";
    readonly CXR: "CXR";
    readonly CYM: "CYM";
    readonly CYP: "CYP";
    readonly CZE: "CZE";
    readonly DEU: "DEU";
    readonly DJI: "DJI";
    readonly DMA: "DMA";
    readonly DNK: "DNK";
    readonly DOM: "DOM";
    readonly DZA: "DZA";
    readonly ECU: "ECU";
    readonly EGY: "EGY";
    readonly ERI: "ERI";
    readonly ESH: "ESH";
    readonly ESP: "ESP";
    readonly EST: "EST";
    readonly ETH: "ETH";
    readonly FIN: "FIN";
    readonly FJI: "FJI";
    readonly FLK: "FLK";
    readonly FRA: "FRA";
    readonly FRO: "FRO";
    readonly FSM: "FSM";
    readonly GAB: "GAB";
    readonly GBR: "GBR";
    readonly GEO: "GEO";
    readonly GGY: "GGY";
    readonly GHA: "GHA";
    readonly GIB: "GIB";
    readonly GIN: "GIN";
    readonly GLP: "GLP";
    readonly GMB: "GMB";
    readonly GNB: "GNB";
    readonly GNQ: "GNQ";
    readonly GRC: "GRC";
    readonly GRD: "GRD";
    readonly GRL: "GRL";
    readonly GTM: "GTM";
    readonly GUF: "GUF";
    readonly GUM: "GUM";
    readonly GUY: "GUY";
    readonly HKG: "HKG";
    readonly HMD: "HMD";
    readonly HND: "HND";
    readonly HRV: "HRV";
    readonly HTI: "HTI";
    readonly HUN: "HUN";
    readonly IDN: "IDN";
    readonly IMN: "IMN";
    readonly IND: "IND";
    readonly IOT: "IOT";
    readonly IRL: "IRL";
    readonly IRN: "IRN";
    readonly IRQ: "IRQ";
    readonly ISL: "ISL";
    readonly ISR: "ISR";
    readonly ITA: "ITA";
    readonly JAM: "JAM";
    readonly JEY: "JEY";
    readonly JOR: "JOR";
    readonly JPN: "JPN";
    readonly KAZ: "KAZ";
    readonly KEN: "KEN";
    readonly KGZ: "KGZ";
    readonly KHM: "KHM";
    readonly KIR: "KIR";
    readonly KNA: "KNA";
    readonly KOR: "KOR";
    readonly KWT: "KWT";
    readonly LAO: "LAO";
    readonly LBN: "LBN";
    readonly LBR: "LBR";
    readonly LBY: "LBY";
    readonly LCA: "LCA";
    readonly LIE: "LIE";
    readonly LKA: "LKA";
    readonly LSO: "LSO";
    readonly LTU: "LTU";
    readonly LUX: "LUX";
    readonly LVA: "LVA";
    readonly MAC: "MAC";
    readonly MAF: "MAF";
    readonly MAR: "MAR";
    readonly MCO: "MCO";
    readonly MDA: "MDA";
    readonly MDG: "MDG";
    readonly MDV: "MDV";
    readonly MEX: "MEX";
    readonly MHL: "MHL";
    readonly MKD: "MKD";
    readonly MLI: "MLI";
    readonly MLT: "MLT";
    readonly MMR: "MMR";
    readonly MNE: "MNE";
    readonly MNG: "MNG";
    readonly MNP: "MNP";
    readonly MOZ: "MOZ";
    readonly MRT: "MRT";
    readonly MSR: "MSR";
    readonly MTQ: "MTQ";
    readonly MUS: "MUS";
    readonly MWI: "MWI";
    readonly MYS: "MYS";
    readonly MYT: "MYT";
    readonly NAM: "NAM";
    readonly NCL: "NCL";
    readonly NER: "NER";
    readonly NFK: "NFK";
    readonly NGA: "NGA";
    readonly NIC: "NIC";
    readonly NIU: "NIU";
    readonly NLD: "NLD";
    readonly NOR: "NOR";
    readonly NPL: "NPL";
    readonly NRU: "NRU";
    readonly NZL: "NZL";
    readonly OMN: "OMN";
    readonly PAK: "PAK";
    readonly PAN: "PAN";
    readonly PCN: "PCN";
    readonly PER: "PER";
    readonly PHL: "PHL";
    readonly PLW: "PLW";
    readonly PNG: "PNG";
    readonly POL: "POL";
    readonly PRI: "PRI";
    readonly PRK: "PRK";
    readonly PRT: "PRT";
    readonly PRY: "PRY";
    readonly PSE: "PSE";
    readonly PYF: "PYF";
    readonly QAT: "QAT";
    readonly REU: "REU";
    readonly ROU: "ROU";
    readonly RUS: "RUS";
    readonly RWA: "RWA";
    readonly SAU: "SAU";
    readonly SDN: "SDN";
    readonly SEN: "SEN";
    readonly SGP: "SGP";
    readonly SGS: "SGS";
    readonly SHN: "SHN";
    readonly SJM: "SJM";
    readonly SLB: "SLB";
    readonly SLE: "SLE";
    readonly SLV: "SLV";
    readonly SMR: "SMR";
    readonly SOM: "SOM";
    readonly SPM: "SPM";
    readonly SRB: "SRB";
    readonly SSD: "SSD";
    readonly STP: "STP";
    readonly SUR: "SUR";
    readonly SVK: "SVK";
    readonly SVN: "SVN";
    readonly SWE: "SWE";
    readonly SWZ: "SWZ";
    readonly SXM: "SXM";
    readonly SYC: "SYC";
    readonly SYR: "SYR";
    readonly TCA: "TCA";
    readonly TCD: "TCD";
    readonly TGO: "TGO";
    readonly THA: "THA";
    readonly TJK: "TJK";
    readonly TKL: "TKL";
    readonly TKM: "TKM";
    readonly TLS: "TLS";
    readonly TON: "TON";
    readonly TTO: "TTO";
    readonly TUN: "TUN";
    readonly TUR: "TUR";
    readonly TUV: "TUV";
    readonly TWN: "TWN";
    readonly TZA: "TZA";
    readonly UGA: "UGA";
    readonly UKR: "UKR";
    readonly UMI: "UMI";
    readonly URY: "URY";
    readonly USA: "USA";
    readonly UZB: "UZB";
    readonly VAT: "VAT";
    readonly VCT: "VCT";
    readonly VEN: "VEN";
    readonly VGB: "VGB";
    readonly VIR: "VIR";
    readonly VNM: "VNM";
    readonly VUT: "VUT";
    readonly WLF: "WLF";
    readonly WSM: "WSM";
    readonly XKX: "XKX";
    readonly YEM: "YEM";
    readonly ZAF: "ZAF";
    readonly ZMB: "ZMB";
    readonly ZWE: "ZWE";
};

export declare function createAnalyticEventCreatorAndDispatcher<ET extends EventType, EN extends string, M extends EventMetadata>(eventBody: Omit<AnalyticEventBody<ET, EN, M>, 'timestamp' | 'value'>): [EventCreator<ET, EN, M>, EventDispatcher<M>];

export declare const createAndAppendSlotFallback: <K extends keyof HTMLElementTagNameMap>({ root, slotName, fallbackContentTagName }: CreateAndAppendSlotParams<K>) => HTMLElementTagNameMap[K] | undefined;

export declare interface CreateAndAppendSlotParams<K extends keyof HTMLElementTagNameMap> {
    root: ShadowRoot | null | undefined;
    slotName: string;
    fallbackContentTagName: K;
}

export declare const createAutocaptureStateChangeEvent: EventCreator<"trace", "id autocapture - state change event", {
step: string;
autocaptureState: string;
autocaptureFallbackReason?: string;
}>;

export declare const createCameraCaptureEvent: EventCreator<"trace", "capture", {
cameraState: {
resolution: Resolution;
activeTrackState: ActiveTrackState | undefined;
cameraFacingMode: CameraFacingMode;
isPlaying: boolean;
isBusy: boolean;
};
deviceListState: DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
};
permissionState: PermissionStore;
cameraSelectorDeviceList: {
devices: JMediaDeviceInfo[];
currentDevice: JMediaDeviceInfo | undefined;
isBusy: boolean;
};
} & {
idSharpness?: unknown;
idAutocapture?: boolean;
idAutocaptureState?: unknown;
idAutocaptureFallbackReason?: string;
timeSpentInStepMs?: number;
cls?: CameraLivenessStatus;
clsm?: CameraLivenessStatus;
docClassifier?: unknown;
classifier?: Classifier;
}>;

export declare const createCameraCaptureHintsShownEvent: EventCreator<"trace", "shown camera capture hints", {
visible: boolean;
}>;

export declare const createCameraInitializing: EventCreator<"trace", "camera initializing", EventMetadata>;

export declare const createCameraPlaying: EventCreator<"trace", "camera playing", {
cameraState: {
resolution: Resolution;
activeTrackState: ActiveTrackState | undefined;
cameraFacingMode: CameraFacingMode;
isPlaying: boolean;
isBusy: boolean;
};
deviceListState: DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
};
permissionState: PermissionStore;
cameraSelectorDeviceList: {
devices: JMediaDeviceInfo[];
currentDevice: JMediaDeviceInfo | undefined;
isBusy: boolean;
};
}>;

export declare const createCameraStateChanged: EventCreator<"trace", "camera state changed", {
cameraState: {
resolution: Resolution;
activeTrackState: ActiveTrackState | undefined;
cameraFacingMode: CameraFacingMode;
isPlaying: boolean;
isBusy: boolean;
};
deviceListState: DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
};
permissionState: PermissionStore;
cameraSelectorDeviceList: {
devices: JMediaDeviceInfo[];
currentDevice: JMediaDeviceInfo | undefined;
isBusy: boolean;
};
}>;

export declare const createChangeLanguage: EventCreator<"action", "change language", EventMetadata>;

export declare const createClickedContinueUploadButtonEvent: EventCreator<"action", "clicked continue button", {
documentType?: string;
pageCount?: number;
}>;

export declare const createClickedCrossDeviceButtonEvent: EventCreator<"action", "clicked cross device button", EventMetadata>;

export declare const createClickedRetryButtonEvent: EventCreator<"action", "clicked retry button", EventMetadata>;

export declare const createClickedSendEmailButtonEvent: EventCreator<"action", "clicked send email button", EventMetadata>;

export declare const createClickedStartButtonEvent: EventCreator<"action", "clicked start button", EventMetadata>;

export declare const createClickedUseAnotherIdButton: EventCreator<"action", "clicked use another ID button", EventMetadata>;

export declare const createCustomTranslationErrorEvent: EventCreator<"trace", "custom translation error", {
message: string;
error?: unknown;
}>;

export declare const createCustomTranslationEvent: EventCreator<"trace", "custom translation", {
customTranslation: string;
}>;

export declare function createDatastoreContainer(overrides?: Partial<CreateDatastoreParams>): Container;

export declare interface CreateDatastoreParams {
    credentialIdStoreFactory?: Factory<CredentialIdStore, [UUID]>;
    credentialFacemapStoreFactory?: Factory<CredentialFacemapStore, [UUID]>;
}

export declare const createEmailSentError: EventCreator<"action", "email sent error", EventMetadata>;

export declare const createErrorEvent: (error: unknown) => ErrorEvent;

export declare const createFailedToFetchEvent: EventCreator<"trace", "failed to fetch", {
error: FetchErrorParams;
}>;

export declare const createLivenessInitializedEvent: EventCreator<"trace", "liveness - initialized", {
step: string;
}>;

export declare const createLivenessManualSelfieFallbackEvent: EventCreator<"trace", "liveness - manual selfie fallback", {
step: string;
reason: string;
}>;

export declare const createLivenessModuleLoadingFailedEvent: EventCreator<"trace", "liveness - module loading failed", {
step: string;
}>;

export declare const createLivenessProgressEvent: EventCreator<"trace", "liveness - progress", {
jliveProgressCurrentStep: number;
jliveProgressStepsTotal: number;
jLiveStepDuration: number;
jLiveDuration: number;
isFullscreen: boolean;
cls?: CameraLivenessStatus;
clsm?: CameraLivenessStatus;
}>;

export declare function createMessageSequence$(messages: JumioSdkScheduledMessage[]): Observable<JumioSdkMessageProgress | undefined>;

export declare const createPublicError: (errorCase: ErrorCase, call: RequestCode, detailCode: number) => PublicError;

export declare const createPublicErrorEvent: EventCreator<"screen", "public error", {
errorCode: string;
}>;

export declare const createRedirectionEvent: EventCreator<"trace", "redirect", {
url: string;
type: "ERROR" | "SUCCESS";
errorCode?: string;
}>;

export declare function createReportEventCreatorAndDispatcher<ET extends EventType, EN extends string, M extends EventMetadata>(eventBody: Omit<ReportEventBody<ET, EN, M>, 'timestamp' | 'value'>): [EventCreator<ET, EN, M>, EventDispatcher<M>];

export declare const createRuntimeEvent: EventCreator<"arbitrary", "runtime", EventMetadata>;

export declare const createSelectedCountryEvent: EventCreator<"action", "selected country", {
country: string | undefined;
}>;

export declare const createSelectedDocumentEvent: EventCreator<"action", "selected document", {
document: string;
digitalIdProvider?: string;
}>;

export declare const createSensorDataEvent: EventCreator<"trace", "sensor data", SensorData>;

export declare const createSettingsEvent: EventCreator<"arbitrary", "settings", {
credentials: unknown;
}>;

export declare const createShownCameraAccessRequestScreenEvent: EventCreator<"screen", "camera access request", {
kind: "denied" | "prompt";
devices: MediaDeviceMetadata[];
}>;

export declare const createShownConsentMessageEvent: EventCreator<"arbitrary", "shown consent message", EventMetadata>;

export declare const createShownCrossDeviceFinishScreenEvent: EventCreator<"screen", "cross device finish", {
acquisitionStatus: AcquisitionStatus;
error?: PublicError;
}>;

export declare const createShownCrossDeviceScreenEvent: EventCreator<"screen", "cross device", EventMetadata>;

export declare const createShownErrorEvent: EventCreator<"screen", "error", EventMetadata>;

export declare const createShownFinishScreenEvent: EventCreator<"screen", "finish", {
outcome: RequestOutcome<FinalizeResponse | undefined, unknown>;
}>;

export declare interface CreateStateMachine {
    credentials: JCredential[];
    setWorkflowStepCallback?: SetWorkflowStep;
    initialState?: CredentialStep | string;
    snapshotValue?: StateMachineSnapshotValue;
}

export declare const createTrustCheckFailedEvent: EventCreator<"trace", "trust check failed", EventMetadata>;

export declare const createTrustCheckStatusFetchErrorEvent: EventCreator<"trace", "trust check status fetch error", {
name?: string;
message?: string;
stack?: string;
}>;

export declare const createTrustCheckSuccessEvent: EventCreator<"trace", "trust check success", EventMetadata>;

export declare const createTrustCheckUrlFetchErrorEvent: EventCreator<"trace", "trust check url fetch error", {
name?: string;
message?: string;
stack?: string;
}>;

export declare const createTrustCheckUrlFetchEvent: EventCreator<"trace", "trust check url fetch", EventMetadata>;

export declare const createUncaughtErrorEvent: EventCreator<"trace", "uncaught error", {
name: string;
message: string;
stack?: string;
}>;

export declare const createUnhandledrejectionEvent: EventCreator<"trace", "unhandled promise rejection", {
name: string;
message: string;
stack?: string;
}>;

export declare const createUsedCaptureTypesEvent: EventCreator<"arbitrary", "capture types", {
livenessCaptureType?: LivenessCaptureTypes;
idCaptureType?: IdCaptureTypes;
xDeviceJourney: boolean;
usedAllCaptureTypes: (IdCaptureTypes | LivenessCaptureTypes)[];
}>;

export declare const createVideoPlayThrowsEvent: EventCreator<"trace", "video thrown an error", {
name: string;
message: string;
stack?: string;
state: unknown;
}>;

export declare const createWorkflowFailedEvent: (metadata: WorkflowEventMetadata) => CustomEvent<WorkflowEventBody<"workflow:failed">>;

export declare const createWorkflowRestarted: EventCreator<"trace", "workflow restarted", EventMetadata>;

export declare const createWorkflowRetryEvent: (metadata: WorkflowEventMetadata) => CustomEvent<WorkflowEventBody<"workflow:retry">>;

export declare const createWorkflowStartEvent: (metadata: WorkflowEventMetadata) => CustomEvent<WorkflowEventBody<"workflow:start">>;

export declare const createWorkflowSuccessEvent: (metadata: WorkflowEventMetadata) => CustomEvent<WorkflowEventBody<"workflow:success">>;

export declare const createWrongSettingsEvent: EventCreator<"arbitrary", "wrong settings", (EventMetadata & WrongSettingsCritical) | (EventMetadata & WrongSettingsNonCritical)>;

export declare const credentailError: ErrorCase;

export declare interface CredentialFacemapState {
    activeVerificationMethod: FacemapVerificationMethod | undefined;
}

export declare interface CredentialFacemapStore {
    setActiveFaceVerificationMethod: (activeVerificationMethod: FacemapVerificationMethod | undefined) => void;
    getActiveFaceVerificationMethod: () => FacemapVerificationMethod | undefined;
    selectActiveFaceVerificationMethod$: () => Observable<FacemapVerificationMethod | undefined>;
    setJLiveManualCaptureFallbackReason: (reason: ManualCaptureFallbackReason | undefined) => void;
    selectJLiveManualCaptureFallbackReason$: () => Observable<ManualCaptureFallbackReason | undefined>;
    selectJLiveFallbackError$: () => Observable<JLiveFallbackError | undefined>;
    setJLiveFallbackError: (error: JLiveFallbackError | undefined) => void;
    selectLivenessState$: () => Observable<CredentialFacemapState & LivenessState>;
    setLivenessVisibleFaceFinder: (oval: LivenessRefDistance) => void;
    selectLivenessVisibleFaceFinder$: () => Observable<LivenessRefDistance>;
    selectLivenessAttempt$: () => Observable<number>;
    selectLivenessFeedbackMessage$: () => Observable<UXDisplayMessage>;
    selectLivenessScanning$: () => Observable<boolean>;
    selectLivenessBackgroundColor$: () => Observable<string | undefined>;
    setLivenessStoreToNextAttempt: () => void;
    setLivenessStoreProgress: (progress: string) => void;
    setLivenessStorePhotinusColor: (photinusColor: string | undefined) => void;
    setLivenessStoreDisplayMessage: (displayMessage: UXDisplayMessage) => void;
    setLivenessStoreCameraCommand: (cameraCommand: UXCameraCommand | undefined) => void;
    setLivenessStoreUiCommand: (uiCommand: UXUICommand | undefined) => void;
    selectLivenessProgress$: () => Observable<[number, number]>;
    reset: () => void;
    destroy: () => void;
}

export declare class CredentialFacemapStoreImpl implements CredentialFacemapStore {
    #private;
    constructor(credential: JCredential<Category.Facemap>);
    destroy(): void;
    setActiveFaceVerificationMethod(activeVerificationMethod: FacemapVerificationMethod | undefined): void;
    setJLiveFallbackError(error: JLiveFallbackError | undefined): void;
    selectJLiveFallbackError$(): Observable<JLiveFallbackError | undefined>;
    setJLiveManualCaptureFallbackReason(reason: ManualCaptureFallbackReason | undefined): void;
    selectJLiveManualCaptureFallbackReason$(): Observable<"module-loading-error" | "module-initialization-error" | "worker-crashed" | "worker-error" | "post-message-error" | "struggle" | "resource-fetch-timeout" | "timeout" | "user-selection" | "excluded-device" | undefined>;
    getActiveFaceVerificationMethod(): "JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM" | undefined;
    selectActiveFaceVerificationMethod$(): Observable<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM" | undefined>;
    selectLivenessState$(): Observable<CredentialFacemapState & LivenessState>;
    setLivenessVisibleFaceFinder(oval: LivenessRefDistance): void;
    selectLivenessVisibleFaceFinder$(): Observable<LivenessRefDistance>;
    selectLivenessAttempt$(): Observable<number>;
    selectLivenessFeedbackMessage$(): Observable<UXDisplayMessage>;
    selectLivenessScanning$(): Observable<boolean>;
    selectLivenessBackgroundColor$(): Observable<string | undefined>;
    setLivenessStoreToNextAttempt(): void;
    setLivenessStoreProgress(progress: string): void;
    setLivenessStorePhotinusColor(photinusColor: string | undefined): void;
    setLivenessStoreDisplayMessage(displayMessage: UXDisplayMessage): void;
    setLivenessStoreCameraCommand(cameraCommand: UXCameraCommand | undefined): void;
    setLivenessStoreUiCommand(uiCommand: UXUICommand | undefined): void;
    reset(): void;
    selectLivenessProgress$(): Observable<[number, number]>;
}

export declare interface CredentialIdStore {
    patchState: (params: Partial<StoreForIdCredential>, settings?: Settings) => void;
    getState: () => StoreForIdCredential;
    selectState$: () => Observable<StoreForIdCredential>;
    destroy: () => void;
}

export declare class CredentialIdStoreImpl implements CredentialIdStore {
    #private;
    constructor(credential: JCredential<Category.Id>);
    patchState(params: Partial<StoreForIdCredential>): void;
    getState(): StoreForIdCredential;
    selectState$(): Observable<StoreForIdCredential>;
    destroy(): void;
}

export declare type CredentialStep = Static<typeof TbCredentialStepSchema>;

export declare type CrossDeviceOption = Static<typeof TbCrossDeviceOptionSchema>;

export declare const CrossDeviceOptionEnum: {
    readonly Default: "default";
    readonly EmailOnly: "email_only";
    readonly QrOnly: "qr_only";
};

export declare const customTranslationErrorEvent: EventDispatcher<    {
message: string;
error?: unknown;
}>;

export declare const customTranslationEvent: EventDispatcher<    {
customTranslation: string;
}>;

declare const DaCameraEventName: {
    readonly CameraInfo: "camera_info";
    readonly CameraLivenessData: "camera_liveness_data";
    readonly CameraLivenessEnd: "camera_liveness_end";
    readonly CameraLivenessReqStatus: "camera_liveness_req_status";
    readonly CameraLivenessStart: "camera_liveness_start";
    readonly CameraLivenessStatus: "camera_liveness_status";
    readonly ReqCameraLivenessData: "req_camera_liveness_data";
};

declare interface DaCameraInfoEvent extends BaseEvent<typeof DaCameraEventName.CameraInfo> {
}

declare interface DaCameraLivenessDataEvent extends BaseEvent<typeof DaCameraEventName.CameraLivenessData> {
}

declare type DaCameraLivenessStatusEvent = DaCameraLivenessWithDuplicatesEvent | DaCameraLivenessWithoutDuplicatesEvent;

declare interface DaCameraLivenessWithDuplicatesEvent extends BaseEvent<typeof DaCameraEventName.CameraLivenessStatus> {
    duplicate_sequences: string;
    duplicates_start_time: string;
    have_duplicates: 'true';
    num_duplicate_frames: string;
}

declare interface DaCameraLivenessWithoutDuplicatesEvent extends BaseEvent<typeof DaCameraEventName.CameraLivenessStatus> {
    duplicate_sequences: string;
    duplicates_start_time: string;
    have_duplicates: 'false';
}

declare type DaCameraOutputEvent = DaCameraInfoEvent | DaCameraLivenessDataEvent | DaCameraLivenessStatusEvent | DaReqCameraLivenessDataEvent;

declare const DaDocIdEventName: {
    readonly DocIdEnd: "doc_id_end";
    readonly DocIdInfo: "doc_id_info";
    readonly DocIdStart: "doc_id_start";
};

declare interface DaDocIdInfo extends BaseEvent<typeof DaDocIdEventName.DocIdInfo> {
    corners: string;
    doc_class?: 'FRONTSIDE' | 'FALLBACK_BACKSIDE' | 'UNKNOWN';
    doc_country?: string;
    doc_idtype?: 'DL' | 'ID' | 'P' | 'V' | 'UNKNOWN';
}

declare type DaDocIdOutputEvent = DaDocIdInfo;

declare const DaImageEventName: {
    readonly Image: "image";
    readonly ImageWithEyes: "image_with_eyes";
};

declare type DaImageOutputEvent = DaImageWithEyesEvent;

declare interface DaImageWithEyesEvent extends BaseEvent<typeof DaImageEventName.ImageWithEyes> {
}

declare const DaLifecycleEventName: {
    readonly GetConfig: "get_config";
    readonly GetConfigResult: "get_config_result";
    readonly Initialize: "initialize";
    readonly InitializeError: "initialize_error";
    readonly InitializeSuccess: "initialize_success";
    readonly Ready: "ready";
    readonly StartSession: "start_session";
    readonly Terminate: "terminate";
};

declare interface DaLifecycleGetConfigResultEvent extends BaseEvent<typeof DaLifecycleEventName.GetConfigResult> {
    names: string;
}

declare interface DaLifecycleInitializeErrorEvent extends BaseEvent<typeof DaLifecycleEventName.InitializeError> {
    reason: string;
}

declare interface DaLifecycleInitializeSuccessEvent extends BaseEvent<typeof DaLifecycleEventName.InitializeSuccess> {
    event_names?: string;
    throttled_events?: string;
    max_events?: string;
}

declare type DaLifecycleOutputEvent = DaLifecycleGetConfigResultEvent | DaLifecycleInitializeErrorEvent | DaLifecycleInitializeSuccessEvent | DaLifecycleReadyEvent | DaLifecycleReadyWithMaxEventsEvent;

declare interface DaLifecycleReadyEvent extends BaseEvent<typeof DaLifecycleEventName.Ready> {
    max_events?: string;
    trigger_event?: string;
}

declare interface DaLifecycleReadyWithMaxEventsEvent extends BaseEvent<typeof DaLifecycleEventName.Ready> {
    max_events: string;
    trigger_event?: string;
}

declare interface DaLivenessDataBlobEvent extends BaseEvent<typeof DaLivenessEventName.DataBlob> {
}

declare interface DaLivenessEmptyPoseEvent extends BaseEvent<typeof DaLivenessEventName.Pose> {
}

declare const DaLivenessEventName: {
    readonly DataBlob: "data_blob";
    readonly Enroll: "enroll";
    readonly FarNearImage: "far_near_image";
    readonly FarPhotinusEnd: "far_photinus_end";
    readonly FarPhotinusStart: "far_photinus_start";
    readonly FmaEmaResult: "fma_ema_result";
    readonly NearPhotinusEnd: "near_photinus_end";
    readonly NearPhotinusStart: "near_photinus_start";
    readonly PhotinusColorChanged: "photinus_color_changed";
    readonly PhotinusPattern: "photinus_pattern";
    readonly PhotinusResult: "photinus_result";
    readonly Pose: "pose";
    readonly PoseReady: "pose_ready";
    readonly PoseStart: "pose_start";
    readonly RefDistance: "ref_distance";
    readonly RefDistanceCancel: "ref_distance_cancel";
    readonly RefDistanceEnd: "ref_distance_end";
    readonly SFSDResult: "sfsd_result";
    readonly ServerDataBlob: "server_data_blob";
    readonly SetMode: "set_mode";
    readonly StartSession: "start_session";
    readonly UserJourneyImage: "user_journey_image";
    readonly Verify: "verify";
    readonly VisorInfo: "visor_info";
    readonly WebpEncodeTime: "webp_encode_time";
};

declare interface DaLivenessFarNearImageEvent extends BaseEvent<typeof DaLivenessEventName.FarNearImage> {
}

declare interface DaLivenessFarPhotinusEndEvent extends BaseEvent<typeof DaLivenessEventName.FarPhotinusEnd> {
}

declare interface DaLivenessFarPhotinusStartEvent extends BaseEvent<typeof DaLivenessEventName.FarPhotinusStart> {
}

declare interface DaLivenessFmaEmaResultEvent extends BaseEvent<typeof DaLivenessEventName.FmaEmaResult> {
}

declare type DaLivenessImagePropertyKey = `liveness_${number}`;

declare type DaLivenessImageTimestampPropertyKey = `liveness_${number}_timestamp`;

declare type DaLivenessImageTypePropertyKey = `liveness_${number}_type`;

declare interface DaLivenessLivenessSFSDResultEvent extends BaseEvent<typeof DaLivenessEventName.SFSDResult> {
}

declare interface DaLivenessNearPhotinusEndEvent extends BaseEvent<typeof DaLivenessEventName.NearPhotinusEnd> {
}

declare interface DaLivenessNearPhotinusStartEvent extends BaseEvent<typeof DaLivenessEventName.NearPhotinusStart> {
}

declare interface DaLivenessNonEmptyPoseEvent extends BaseEvent<typeof DaLivenessEventName.Pose> {
    face_roi: string;
    iod: string;
    pseudo_pitch: string;
    pseudo_yaw: string;
    sequence_id: string;
    shift?: string;
    shift_time?: string;
}

declare type DaLivenessOutputEvent = DaLivenessDataBlobEvent | DaLivenessFarNearImageEvent | DaLivenessFarPhotinusEndEvent | DaLivenessFarPhotinusStartEvent | DaLivenessFmaEmaResultEvent | DaLivenessLivenessSFSDResultEvent | DaLivenessNearPhotinusEndEvent | DaLivenessNearPhotinusStartEvent | DaLivenessPhotinusPatternEvent | DaLivenessPhotinusResultEvent | DaLivenessPoseEvent | DaLivenessPoseReadyEvent | DaLivenessPoseStartEvent | DaLivenessRefDistanceCancelEvent | DaLivenessRefDistanceEndEvent | DaLivenessRefDistanceEvent | DaLivenessServerDataBlobEvent | DaLivenessSetModeEvent | DaLivenessUserJourneyImageEvent;

declare interface DaLivenessPhotinusPatternEvent extends BaseEvent<typeof DaLivenessEventName.PhotinusPattern> {
    pattern: string;
}

declare interface DaLivenessPhotinusResultEvent extends BaseEvent<typeof DaLivenessEventName.PhotinusResult> {
}

declare type DaLivenessPoseEvent = DaLivenessEmptyPoseEvent | DaLivenessNonEmptyPoseEvent;

declare interface DaLivenessPoseReadyEvent extends BaseEvent<typeof DaLivenessEventName.PoseReady> {
}

declare interface DaLivenessPoseStartEvent extends BaseEvent<typeof DaLivenessEventName.PoseStart> {
}

declare interface DaLivenessRefDistanceCancelEvent extends BaseEvent<typeof DaLivenessEventName.RefDistanceCancel> {
}

declare interface DaLivenessRefDistanceEndEvent extends BaseEvent<typeof DaLivenessEventName.RefDistanceEnd> {
}

declare interface DaLivenessRefDistanceEvent extends BaseEvent<typeof DaLivenessEventName.RefDistance> {
    is_near: '0' | '1';
}

declare type DaLivenessServerDataBlobEvent = DaLivenessServerDataBlobEventWithoutLivenessImagesEvent | DaLivenessServerDataBlobWithLivenessImagesEvent;

declare interface DaLivenessServerDataBlobEventWithoutLivenessImagesEvent extends BaseEvent<typeof DaLivenessEventName.ServerDataBlob> {
    server_data: Uint8Array;
}

declare interface DaLivenessServerDataBlobWithLivenessImagesEvent extends BaseEvent<typeof DaLivenessEventName.ServerDataBlob> {
    liveness_blob: Uint8Array;
    [key: DaLivenessImagePropertyKey]: Uint8Array | undefined;
    [key: DaLivenessImageTypePropertyKey | DaLivenessImageTimestampPropertyKey]: string | undefined;
    best_image: DaLivenessImagePropertyKey;
    capture_error?: string;
}

declare interface DaLivenessSetModeEvent extends BaseEvent<typeof DaLivenessEventName.SetMode> {
    mode: Mode;
}

declare interface DaLivenessUserJourneyImageEvent extends BaseEvent<typeof DaLivenessEventName.UserJourneyImage> {
}

declare type DaOutputEvent = DaCameraOutputEvent | DaDocIdOutputEvent | DaImageOutputEvent | DaLifecycleOutputEvent | DaLivenessOutputEvent | DaServiceOutputEvent;

declare interface DaReqCameraLivenessDataEvent extends BaseEvent<typeof DaCameraEventName.ReqCameraLivenessData> {
}

export declare const darken: (hex: string, ratio: number) => string;

declare interface DaServiceCreateWasmInstanceSuccessEvent extends BaseEvent<typeof DaServiceEventMap.CreateWasmInstanceSuccess> {
}

declare interface DaServiceEncodedResponseEvent extends BaseEvent<typeof DaServiceEventMap.EncodedResponses> {
    encoded_responses: Uint8Array<ArrayBuffer>;
    encoded_responses_layouts: EncodedResponseLayout[];
}

declare const DaServiceEventMap: {
    readonly CreateWasmInstance: "_create_wasm_instance";
    readonly CreateWasmInstanceSuccess: "_create_wasm_instance_success";
    readonly EncodedRequests: "encoded_requests";
    readonly EncodedResponses: "encoded_responses";
    readonly GetWorkerAvailabilityRequest: "_get_worker_availability_request";
    readonly GetWorkerAvailabilityResponse: "_get_worker_availability_response";
    readonly InitializeWasm: "_initialize_wasm";
};

declare interface DaServiceGetWorkerAvailabilityResponse extends BaseEvent<typeof DaServiceEventMap.GetWorkerAvailabilityResponse> {
    state: Record<string, WorkerAvailability>;
}

declare type DaServiceOutputEvent = DaServiceCreateWasmInstanceSuccessEvent | DaServiceEncodedResponseEvent | DaServiceGetWorkerAvailabilityResponse;

export declare interface DataAcquisitionFetchParameters {
    wasmModule: BufferSource;
    assets: Uint8Array;
}

export declare interface DataAcquisitionParameters extends DataAcquisitionFetchParameters {
    configName: ConfigName;
}

export declare type DataCenter = Static<typeof TbDataCenterSchema>;

export declare const DataCenterEnum: {
    readonly Eu: "eu";
    readonly Us: "us";
    readonly Sgp: "sgp";
};

export declare enum DataStep {
    Start = "data-start",
    Finish = "data-finish"
}

declare type DeepRequired<T> = T extends Builtin ? T : T extends Map<infer K, infer V> ? Map<DeepRequired<K>, DeepRequired<V>> : T extends Set<infer U> ? Set<DeepRequired<U>> : T extends readonly (infer U)[] ? readonly DeepRequired<U>[] : T extends (infer U)[] ? DeepRequired<U>[] : {
    [K in keyof T]-?: DeepRequired<T[K]>;
};

export declare const DEV: boolean;

export declare interface DeviceDetails extends Record<string, unknown> {
    'sdk-platform': string;
    ua: string;
    hostname: string;
    runtime: string;
    iframe: boolean;
    jumioHosted: boolean;
    webview: boolean;
    version: string;
    browserName?: string;
    browserVersion?: string;
    browserMajor?: string;
    deviceModel?: string;
    deviceVendor?: string;
    osName?: string;
    osVersion?: string;
}

export declare type DeviceIdConstraint = Static<typeof TbDeviceIdConstraintSchema>;

export declare const deviceIsOffline: ErrorCase;

export declare class DeviceListLifecycleComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): symbol;
}

export declare interface DeviceRisk {
    token: string;
    sdkType: SdkType;
}

export declare type DeviceRiskToken = Static<typeof TbDeviceRiskTokenSchema>;

declare const deviceStore$: Store<    {
name: string;
state: DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
};
config: never;
}, DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
}>;

export declare interface DeviceStore {
    deviceId: string | undefined;
}

export declare type DeviceStoreState = UnwrapObservable<typeof deviceStore$>;

export declare type DigitalIdentity = Static<typeof TbDigitalIdentitySchema>;

export declare type DigitalIdentityIdType = Static<typeof TbDigitalIdentityIdTypeSchema>;

export declare const DigitalIdentityIdTypeEnum: {
    readonly DigitalIdentity: "DIGITAL_IDENTITY";
};

export declare const DigitalIdentitySubtypeEnum: {
    readonly DigitalDrivingLicensePdf: "DIGITAL_DRIVING_LICENSE_PDF";
    readonly Mastercard: "MASTERCARD";
    readonly Eidas: "EIDAS";
    readonly TrustCheck: "TRUST_CHECK";
};

export declare type DigitalIdentitySubtypeType = Static<typeof TbDigitalIdentitySubtypeSchema>;

export declare const dim: (hex: string, ratio: number) => string;

export declare const dispatchCameraErrorMessage: (message: Error) => void;

export declare const docClassifierCaptured$: BehaviorSubject<AutocaptureDocClassifierExtendedData | undefined>;

export declare const docPose$: Subject<AutocaptureDocPose | undefined>;

export declare type DocumentPreview = Static<typeof TbDocumentPreviewSchema>;

export declare interface DocumentResultResponse {
    acquisitionGuid: UUID;
    credentialGuid: UUID;
    originCredentialFileGuid: UUID;
    pageCount: number;
    parts: Record<string, UUID>;
}

export declare enum DocumentStep {
    Start = "document-start",
    UploadScreen = "document-upload",
    MobileCapture = "document-mobile-capture",
    Finish = "document-finish"
}

export declare type DocumentTypeCode = Static<typeof TbDocumentTypeCodeSchema>;

export declare const DocumentTypeCodeEnum: {
    readonly BC: "BC";
    readonly BS: "BS";
    readonly CAAP: "CAAP";
    readonly CB: "CB";
    readonly CC: "CC";
    readonly CCS: "CCS";
    readonly CRC: "CRC";
    readonly HCC: "HCC";
    readonly IC: "IC";
    readonly LAG: "LAG";
    readonly LOAP: "LOAP";
    readonly MEDC: "MEDC";
    readonly MOAP: "MOAP";
    readonly PB: "PB";
    readonly SEL: "SEL";
    readonly SENC: "SENC";
    readonly SS: "SS";
    readonly SSC: "SSC";
    readonly STUC: "STUC";
    readonly TAC: "TAC";
    readonly TR: "TR";
    readonly UB: "UB";
    readonly USSS: "USSS";
    readonly VC: "VC";
    readonly VT: "VT";
    readonly WWCC: "WWCC";
    readonly WP: "WP";
    readonly CUSTOM: "CUSTOM";
};

export declare type DocumentVariant = Static<typeof TbDocumentVariantSchema>;

export declare const DocumentVariantEnum: {
    readonly Paper: "PAPER";
    readonly Plastic: "PLASTIC";
};

export declare type DownloadProgressCallback = (params: DownloadProgressCallbackParams) => void;

export declare interface DownloadProgressCallbackParams {
    total: number;
    loaded: number;
    progress: number;
}

export declare class DragAndDropChangeEvent extends CustomEvent<DragAndDropChangeParams> {
    constructor(params: DragAndDropChangeParams);
}

declare interface DragAndDropChangeParams {
    isDragging: boolean;
}

export declare class DropdownComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    options: DropdownOption[];
    selection: string;
    disabled: boolean;
    label: string;
    render(): TemplateResult<1>;
}

export declare interface DropdownOption {
    label: string;
    value: string;
}

export declare class DropdownSelectionEvent extends CustomEvent<DropdownOption> {
    constructor(params: DropdownOption);
}

export declare class DropImageRequestEvent extends CustomEvent<FileStoreEntity> {
    constructor(params: FileStoreEntity);
}

export declare class DsCameraSelectorComponent extends BaseComponent {
    static styles: CSSResult[];
    orientation: CameraSelectorOrientation;
    items?: CameraIconComponent[];
    render(): TemplateResult<1>;
}

export declare interface DsDimensions {
    width: number;
    height: number;
}

export declare const E2E_MESSAGE_WAIT_TIME_MS: number;

export declare const E2E_MIN_WAIT_TIME_MS: number;

export declare const eidasFailed: EventDispatcher<EventMetadata>;

export declare const EIDASFailedEvent: EventCreator<"trace", "eIDAS failed", EventMetadata>;

export declare interface EidasResult {
    state: EidasState;
}

export declare type EidasState = Static<typeof TbEidasStateSchema>;

export declare const EidasStateEnum: {
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly NOT_AVAILABLE: "NOT_AVAILABLE";
};

export declare interface EidasStoreState {
    eidasUrl?: string;
    eidasIsOutOfAttempts?: boolean;
}

export declare const eidasSuccess: EventDispatcher<EventMetadata>;

export declare const EIDASSuccessEvent: EventCreator<"trace", "eIDAS success", EventMetadata>;

export declare interface EidasUrlResponse {
    url: string;
}

export declare type EmailErrorReason = Static<typeof TbEmailErrorReasonSchema>;

export declare const EmailErrorReasonEnum: {
    readonly NOT_TURNED_ON: 890;
    readonly OUT_OF_ATTEMPTS: 891;
    readonly INVALID_ADDRESS: 892;
    readonly UNKNOWN: 893;
};

export declare interface EmailRequest {
    locale: Locale;
    address: string;
}

export declare interface EmailResponse {
    success: boolean;
    reason?: string;
    rejectionCode?: number;
}

export declare const emailSentError: EventDispatcher<EventMetadata>;

export declare const embargoedCountry: ErrorCase;

declare interface EncodedResponseLayout {
    startOffset: number;
    dataBufferOffset: number;
    length: number;
}

export declare const enumerateDevices$: (intervalMs?: number) => Observable<MediaDeviceInfo[]>;

export declare interface ErrorCase {
    domain: ErrorDomain;
    message: string;
    retry: boolean;
    legacyCode: LegacyErrorCode;
}

export declare type ErrorDomain = Static<typeof TbErrorDomainSchema>;

export declare const ErrorDomainEnum: {
    readonly NetworkProblems: "A";
    readonly SecureConnectionFailed: "B";
    readonly AuthenticationFailed: "C";
    readonly DeviceIsOffline: "E";
    readonly ResourceFailedToLoad: "F";
    readonly CancelledByEndUser: "G";
    readonly NoCameraConnection: "H";
    readonly ALEKeyInvalid: "I";
    readonly TransactionAlreadyFinished: "J";
    readonly UnsupportedDocumentCode: "K";
    readonly TransactionReferenceInvalid: "L";
    readonly TransactionCannotBeCompleted: "M";
    readonly SDKTokenError: "N";
};

export declare type ErrorHandler = (exception: unknown) => void;

export declare const errorHandler: <T = unknown>(element: HTMLElement, ...handlers: ErrorHandler[]) => UnaryFunction<Observable<T>, Observable<T>>;

export declare class ErrorMessageComponent extends BaseComponent {
    static styles: CSSResult[];
    title: string;
    message: string;
    overlay: boolean;
    errorCode: string;
    date: Date | null;
    transactionId: string;
    showDate: boolean;
    buttonElements: HTMLElement[];
    render(): TemplateResult_2<1>;
}

export declare interface EventBody {
    eventType: number;
    timestamp: number;
    payload: Record<string, unknown> & {
        value: string;
        level: LogLevel;
    };
}

export declare interface EventBodyAttachments<M extends EventMetadata = EventMetadata> {
    tags?: Tags;
    metadata?: M;
}

export declare interface EventBodyBase<ET extends EventType, EN extends string, M extends EventMetadata> {
    eventType: ET;
    eventName: EN;
    value: `${ET}:${EN}`;
    level: LogLevel;
    code: number;
    timestamp: Date;
    metadata?: M;
    tags?: Tags;
}

export declare type EventBodyCreator<ET extends EventType = EventType, EN extends string = string, M extends EventMetadata = EventMetadata> = (params: EventBodyAttachments<M>) => LogEventBody<ET, EN, M>;

export declare type EventCreator<ET extends EventType, EN extends string, M extends EventMetadata> = (params?: EventBodyAttachments<M>) => LogEventBody<ET, EN, M>;

export declare type EventDispatcher<M extends EventMetadata = EventMetadata> = (self: HTMLElement, params?: EventBodyAttachments<M>) => void;

declare interface EventLike<T> {
    event: T;
}

export declare type EventMetadata = Record<string, unknown>;

export declare type EventType = 'action' | 'arbitrary' | 'error' | 'screen' | 'trace';

export declare const EXECUTION_ENVIRONMENT: ExecutionEnvironment;

export declare type ExecutionEnvironment = Static<typeof TbExecutionEnvironmentSchema>;

export declare const ExecutionEnvironmentEnum: {
    readonly EndToEnd: "e2e";
    readonly Production: "production";
    readonly Development: "development";
};

export declare interface ExtendedUploadProgressParams {
    waitingTime?: number;
}

export declare type ExtractedData = Static<typeof TbExtractedDataSchema>;

export declare type ExtractedDataResponse = Record<string, ExtractedData>;

export declare type ExtractionSide = Static<typeof TbExtractionSideSchema>;

export declare const ExtractionSideEnum: {
    readonly Front: "FRONT";
    readonly Back: "BACK";
};

export declare const extractNavigationStepInfo: <CS extends CredentialStep, NS extends NavigationStep<CS>>({ step, substep, credentialId, activeScreen, shouldStoreNavigationState }: NS) => NavigationStepMap[CS];

export declare type FaceFinderBorderWidth = Static<typeof TbFaceFinderBorderWidthSchema>;

export declare const FaceFinderBorderWidthEnum: {
    readonly Idle: "idle";
    readonly Scanning: "scanning";
};

export declare class FaceFinderComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    readonly canvasRef: Ref<HTMLCanvasElement>;
    customOvalConfigurations: Record<LivenessFaceFinderDistance, LivenessFaceFinder> | undefined;
    constructor();
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    handleScanningChange(scanning: boolean, withAnimation?: boolean): void;
    render(): TemplateResult<1>;
    restartAnimationLoop(): void;
    stopAnimationLoop(): void;
    drawCanvas(withAnimation?: boolean): void;
}

export declare type FaceFinderState = UnwrapObservable<ReturnType<typeof selectFaceFinderState$>>;

export declare enum FacemapStep {
    Start = "identity-start",
    JumioStandard = "identity-jumio-standard",
    JumioStandardGuidance = "identity-jumio-standard-guidance",
    JumioStandardCaptureScreen = "identity-jumio-standard-capture-screen",
    JumioStandardCaptureScreenLiveness = "identity-jumio-standard-capture-screen-liveness",
    JumioStandardCaptureScreenLivenessLoading = "identity-jumio-standard-capture-screen-liveness-loading",
    JumioStandardCaptureScreenCaptureFinish = "identity-jumio-standard-capture-screen-capture-finish",
    JumioStandardCaptureScreenSelfie = "identity-jumio-standard-capture-screen-manual-selfie",
    JumioStandardCaptureScreenUpload = "identity-jumio-standard-capture-screen-upload",
    JumioStandardCaptureScreenUploadFailed = "identity-jumio-standard-capture-screen-upload-failed",
    JumioStandardUsabilityCheck = "identity-jumio-standard-usability-check",
    JumioStandardUsabilityCheckFailure = "identity-jumio-standard-usability-check-failure",
    JumioStandardFinish = "identity-jumio-standard-finish",
    Finish = "identity-finish"
}

export declare type FacemapStore = ReturnType<typeof createStore<[PropsFactory<CredentialFacemapState & LivenessState, undefined>]>>;

export declare type FacemapVerificationMethod = Static<typeof TbFacemapVerificationMethodSchema>;

export declare const FacemapVerificationMethodEnum: {
    readonly JumioStandard: "JUMIO_STANDARD";
    readonly JumioLiveness: "JUMIO_LIVENESS";
    readonly JumioPremium: "JUMIO_PREMIUM";
};

export declare type FacingModeConstraint = Static<typeof TbFacingModeConstraintSchema>;

export declare type FacingModePreference = Static<typeof TbFacingModePreferenceSchema>;

export declare const FacingModePreferenceEnum: {
    readonly User: "user";
    readonly Environment: "environment";
};

export declare const failedToFetch: EventDispatcher<    {
error: FetchErrorParams;
}>;

export declare class FetchError extends DOMException {
    readonly details: FetchErrorParams;
    constructor(details: FetchErrorParams);
}

export declare interface FetchErrorParams {
    httpStatus: number;
    errorJson?: unknown;
    errorText?: string;
    message: string;
    requestURI: string;
    publicError?: PublicError;
}

export declare class FileEmptyListPlaceholderComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult<1>;
}

export declare type FileFormat = Static<typeof TbFileFormatSchema>;

export declare const FileFormatEnum: {
    readonly WebP: "WEBP";
    readonly Png: "PNG";
    readonly Jpg: "JPG";
    readonly Jpeg: "JPEG";
    readonly Jpeg2000: "JPEG_2000";
    readonly Pdf: "PDF";
    readonly Dat: "DAT";
};

export declare type FileListFilter = (files: File[]) => File[];

export declare class FileMultiUploadComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    fileCollection: FileStoreEntity[];
    readonly fileSourcePickerRef: Ref_2<FileSourcePickerComponent>;
    render(): TemplateResult<1>;
}

export declare class FilePickerAddFileComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    browseButton: boolean;
    captureButton: boolean;
    plusSignIcon: boolean;
    emptyStateButton: boolean;
    render(): TemplateResult<1>;
}

export declare class FilePickerBrowseFileEvent extends CustomEvent<undefined> {
    constructor();
}

export declare class FilePickerCaptureFileEvent extends CustomEvent<undefined> {
    constructor();
}

export declare class FilePickerDropHerePlaceholderComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult<1>;
}

export declare type FilePickerError = FilePickerErrorFileType | FilePickerErrorMaxFileSize;

export declare const FilePickerErrorEnum: {
    readonly MaxFileSize: "max-file-size";
    readonly FileType: "file-type";
};

export declare interface FilePickerErrorFileType {
    type: typeof FilePickerErrorEnum.FileType;
    allowedFileTypes: string[];
    actualFileType: string;
}

export declare interface FilePickerErrorMaxFileSize {
    type: typeof FilePickerErrorEnum.MaxFileSize;
    maxAllowedFileSize: number;
    actualFileSize: number;
}

export declare const FilePickerErrorMessage = "filepickererror";

export declare class FilePickerErrorMessageEvent extends CustomEvent<FilePickerError> {
    constructor(error: FilePickerError);
}

export declare class FilePickerItemComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    file: FileStoreEntity;
    render(): TemplateResult<1>;
    dispatchImagePreviewRequest: (e: Event) => void;
    dispatchDropImageEvent: ButtonClickEventHandler;
    getDeleteAriaLabel(): string;
}

export declare class FileRemoveEvent extends CustomEvent<unknown> {
    constructor();
}

export declare class FileSinkComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    filter: FileListFilter;
    disconnectedCallback(): void;
    render(): unknown;
    firstUpdated(changedProperties: PropertyValues<this>): void;
}

export declare type FileSource = Static<typeof TbFileSourceSchema>;

declare type FileSource_2 = Static<typeof TbFileSourceSchema_2>;

export declare class FileSourceClipboardComponent extends BaseComponent {
    #private;
    disconnectedCallback(): void;
    render(): unknown;
    firstUpdated(changedProperties: PropertyValues<this>): void;
}

export declare const FileSourceEnum: {
    readonly Camera: "camera";
    readonly Upload: "upload";
};

export declare class FileSourcePickerComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    dragging: boolean;
    dragOver: boolean;
    fileInputMultiple: boolean;
    fileInputAccept: string;
    fileInputDirectory: boolean;
    fileInputAllowDirs: boolean;
    fileInputWebkitDirectory: boolean;
    fileInputCapture: boolean;
    disconnectedCallback(): void;
    render(): unknown;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    clearFile(): void;
    browseFile(): void;
}

export declare interface FileStoreEntity {
    upload?: UploadState;
    usability?: UsabilityCheckState;
    thumbnail?: ThumbnailState;
}

export declare type FileStoreEntityWithDecision = Static<typeof TbFileStoreEntityWithDecisionSchema>;

export declare type FileStoreEntityWithDecisionPass = Static<typeof TbFileStoreEntityWithDecisionPassSchema>;

export declare type FileStoreEntityWithDecisionReject = Static<typeof TbFileStoreEntityWithDecisionRejectSchema>;

declare type FileStoreRecord<T = string> = Partial<Record<UUID, T>>;

export declare class FilesUploadedEvent extends CustomEvent<FileUploadedParams> {
    constructor(type: UploadEvents, params: FileUploadedParams);
}

export declare class FileUploadComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    enabled: boolean;
    filePresent: boolean;
    maxFileSize: number;
    accept: string;
    key: UUID | undefined;
    previewImageUrl: string | undefined;
    clearFile(): void;
    render(): TemplateResult<1>;
}

declare interface FileUploadedParams {
    source: FileSource_2;
    files: File[];
}

export declare class FileUploadEvent extends CustomEvent<FileUploadParams> {
    constructor(params: FileUploadParams);
}

declare type FileUploadEventErrorParams = EventMetadata & {
    type: 'file upload error';
    category: Category;
    request: OmitDeep<UploadRequest, 'file'>;
    error: FetchErrorParams;
};

declare type FileUploadEventInitiatedParams = EventMetadata & {
    type: 'file upload initiated';
    category: Category;
    request: OmitDeep<UploadRequest, 'file'>;
};

declare interface FileUploadEventMap {
    'file upload initiated': FileUploadEventInitiatedParams;
    'file upload success': FileUploadEventSuccessParams;
    'file upload error': FileUploadEventErrorParams;
}

declare type FileUploadEventName = FileUploadEventParams['type'];

declare type FileUploadEventParams = FileUploadEventErrorParams | FileUploadEventInitiatedParams | FileUploadEventSuccessParams;

declare type FileUploadEventSuccessParams = EventMetadata & {
    type: 'file upload success';
    category: Category;
    request: OmitDeep<UploadRequest, 'file'>;
};

export declare interface FileUploadParams {
    file: File;
    mimeType: string;
    extension: string;
}

export declare const filterOutUndesiredIphoneCameras: <T extends JMediaDeviceInfo | MediaDeviceInfo>(value: T) => boolean;

export declare interface FinalizeResponse {
    extractDataExecuted: boolean;
}

export declare type FindFileMetadataByParamsCallback = (item: FileStoreEntity) => boolean;

export declare const findFileStoreEntitiesByParams: (callback: FindFileMetadataByParamsCallback, credentialId?: `${string}-${string}-${string}-${string}-${string}`) => FileStoreEntity[];

export declare const findFileStoreEntityByParams: (callback: FindFileMetadataByParamsCallback, credentialId?: `${string}-${string}-${string}-${string}-${string}`) => FileStoreEntity | undefined;

export declare class FullscreenManager {
    #private;
    private static instance;
    readonly fullscreenChange$: Observable<boolean>;
    readonly fullscreenError$: Observable<void>;
    private constructor();
    static getInstance(): FullscreenManager;
    static resetInstance(): void;
    enterFullscreen(element?: HTMLElement): Promise<void>;
    exitFullscreen(): Promise<void>;
    isFullscreen(): boolean;
    isFullscreenEnabled(): boolean;
    getStrategy(): FullscreenStrategy | undefined;
    toggleFullscreenMode(element?: HTMLElement): Promise<void>;
}

export declare class FullscreenModeButtonComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    elRef: Ref<HTMLElement> | undefined;
    render(): TemplateResult<1>;
}

declare interface FullscreenStrategy {
    requestFullscreen(element: HTMLElement): Promise<void>;
    exitFullscreen(): Promise<void>;
    isFullscreen(): boolean;
    isFullscreenEnabled(): boolean;
    cleanUp(): void;
}

export declare const generalNetworkError: ErrorCase;

declare const generateAction: (params: Partial<NavigationStep>) => {
    type: string;
    params: Partial<NavigationStep>;
};

export declare interface GenerateCredentialParams {
    credentialId: UUID;
    previousStep: StepCallback;
    nextStep: StepCallback;
}

export declare const generateFileUploadLoggerEvents: <T extends FileUploadEventName>(eventName: T) => [EventCreator<"trace", T, FileUploadEventMap[T]>, EventDispatcher<FileUploadEventMap[T]>];

/**
 * You can visualize the state machine with [Stately](https://stately.ai/viz)
 */
export declare const generateStateMachineFromCredentials: ({ credentials, setWorkflowStepCallback, initialState }: CreateStateMachine) => StateMachine<MachineContext, AnyEventObject, {}, never, {
type: "setWorkflowStep";
params: NavigationStep;
}, never, never, {
step: VirtualStep.Setup | VirtualStep.Finish | {
start: StartStep;
};
activeScreen: "workflow" | "cross-device";
}, string, NonReducibleUnknown, NonReducibleUnknown, EventObject, MetaObject, {
id: "@jumio/websdk workflow state machine";
states: {
readonly step: {
id: "step";
states: {
readonly finish: {};
readonly start: {
states: {
readonly "start-screen-start": {};
readonly "start-screen-consent": {};
readonly "start-screen-finish": {};
};
};
readonly setup: {};
};
};
readonly activeScreen: {
id: "active screen state machine";
states: {
readonly workflow: {};
readonly "cross-device": {};
};
};
};
}>;

export declare const generateUaVariations: () => string[];

export declare const getActiveCredentialId: () => `${string}-${string}-${string}-${string}-${string}`;

export declare const getActiveDevice: () => JMediaDeviceInfo | undefined;

export declare const getActiveTrackState: (store?: CameraStoreState & {
    clsEntities: Record<number, CameraLivenessStatus>;
    clsIds: number[];
}) => ActiveTrackState | undefined;

export declare const getAllSupportedCountries: () => {
    country: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE";
    idTypes: ({
        idType: "ID_CARD";
        variants: {
            format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
            variant: "PAPER" | "PLASTIC";
            parts: {
                side: "FRONT" | "BACK";
            }[];
        }[];
    } | {
        idType: "DRIVING_LICENSE";
        variants: {
            format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
            variant: "PAPER" | "PLASTIC";
            parts: {
                side: "FRONT" | "BACK";
            }[];
        }[];
    } | {
        idType: "PASSPORT";
        variants: {
            format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
            variant: "PAPER" | "PLASTIC";
            parts: {
                side: "FRONT" | "BACK";
            }[];
        }[];
    } | {
        idType: "VISA";
        variants: {
            format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
            variant: "PAPER" | "PLASTIC";
            parts: {
                side: "FRONT" | "BACK";
            }[];
        }[];
    } | {
        provider?: string | undefined;
        logoUrl?: string | undefined;
        title: string;
        subType: "TRUST_CHECK";
        idType: "DIGITAL_IDENTITY";
    } | {
        title: string;
        subType: "DIGITAL_DRIVING_LICENSE_PDF";
        idType: "DIGITAL_IDENTITY";
        file: "PDF";
    } | {
        title: string;
        subType: "MASTERCARD";
        idType: "DIGITAL_IDENTITY";
    } | {
        title: string;
        subType: "EIDAS";
        idType: "DIGITAL_IDENTITY";
    })[];
}[];

export declare const getAutocaptureAssetsLoadingTimeoutMs: () => number;

export declare const getAutocaptureDocFinder: () => AutocaptureStateDocFinderPosition;

export declare const getAutocaptureFocusTime: () => number;

export declare const getAutocaptureState: () => AutocaptureStore;

export declare const getBackupByGuid: (guid: string) => RestoreFromBackup | undefined;

export declare type GetBlobCallback = (params?: CameraCapturingEngineGetBlobParams) => Promise<CameraCapturingEngineGetBlobResult>;

export declare const getCameraErrorMessage$: () => Observable<Error>;

export declare const getCameraStateLogData$: () => Observable<    {
cameraState: {
resolution: Resolution;
activeTrackState: ActiveTrackState | undefined;
cameraFacingMode: CameraFacingMode;
isPlaying: boolean;
isBusy: boolean;
};
deviceListState: DeviceStore & {
deviceEntities: Record<string, JMediaDeviceInfo>;
deviceIds: string[];
} & {
mockDeviceEntities: Record<string, JMediaDeviceInfo>;
mockDeviceIds: string[];
};
permissionState: PermissionStore;
cameraSelectorDeviceList: {
devices: JMediaDeviceInfo[];
currentDevice: JMediaDeviceInfo | undefined;
isBusy: boolean;
};
}>;

export declare const getCaptureHintsState: () => HelpStore;

export declare const getClsItems: () => CameraLivenessStatus[];

export declare const getClsLatestItem: (timestamp?: number) => CameraLivenessStatus | undefined;

export declare const getClsMax: (timestamp?: number) => CameraLivenessStatus;

export declare const getConsents: () => MultipartConsent[];

export declare const getCredentialById: (credentialId: UUID) => JCredential;

export declare const getCustomerId: () => "" | `${string}-${string}-${string}-${string}-${string}`;

export declare const getDefaultFaceCaptureConstraints: () => MediaTrackConstraintSet;

export declare const getDefaultIdCaptureConstraints: () => MediaTrackConstraintSet;

export declare const getDefaultVideoConstraints: () => MediaTrackConstraintSet;

export declare const getDisplayMode$: () => Observable<AppDisplayMode>;

export declare const getDocClassifierCaptured: () => AutocaptureDocClassifierExtendedData | undefined;

export declare const getDocTypeOrCaptureScreenEntryAction: () => `${string}-${string}-${string}-${string}-${string}:id-capture-screen-entry` | `${string}-${string}-${string}-${string}-${string}:id-doctype-selection`;

export declare const getDocumentTranslationForLocale: (locale: Locale, translations: Record<string, string>) => string;

export declare const getEidasUrl: EventDispatcher<EventMetadata>;

export declare const getEIDASUrlEvent: EventCreator<"trace", "get eIDAS url", EventMetadata>;

export declare const getFallbackVideoResolution: () => {
    width: number;
    height: number;
};

export declare interface GetFilePartParams {
    acquisitionId: UUID;
    credentialId: UUID;
    partId: UUID;
}

export declare const getFileStoreEntitiesByCredentialId: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => FileStoreEntity[];

export declare const getFileStoreEntityById: (id: UUID) => {
    upload: {
        idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
        idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
        source: "camera" | "upload";
        state: "not-started";
        classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
        category: Category;
        credentialId: `${string}-${string}-${string}-${string}-${string}`;
        blob: Blob;
        batchBytesToUpload: number;
        batchBytesUploaded: number;
        batchUploadProgress: number;
    } | {
        progress?: number | undefined;
        idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
        idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
        source: "camera" | "upload";
        state: "progress";
        classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
        category: Category;
        credentialId: `${string}-${string}-${string}-${string}-${string}`;
        blob: Blob;
        batchBytesToUpload: number;
        batchBytesUploaded: number;
        batchUploadProgress: number;
    } | {
        idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
        idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
        error: unknown;
        id: `${string}-${string}-${string}-${string}-${string}`;
        source: "camera" | "upload";
        state: "error";
        classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
        category: Category;
        credentialId: `${string}-${string}-${string}-${string}-${string}`;
        blob: Blob;
        batchBytesToUpload: number;
        batchBytesUploaded: number;
        batchUploadProgress: number;
    } | {
        idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
        idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
        docvProcessed?: boolean | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
        source: "camera" | "upload";
        state: "success";
        classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
        category: Category;
        credentialId: `${string}-${string}-${string}-${string}-${string}`;
        blob: Blob;
        batchBytesToUpload: number;
        batchBytesUploaded: number;
        batchUploadProgress: number;
        usabilityId: string;
    };
    usability: UsabilityCheckState;
    thumbnail: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        state: "not-started";
    } | {
        id: `${string}-${string}-${string}-${string}-${string}`;
        state: "progress";
    } | {
        id: `${string}-${string}-${string}-${string}-${string}`;
        state: "success";
        thumbnail: {
            width: number;
            height: number;
            base64: string;
        };
    } | {
        error: unknown;
        id: `${string}-${string}-${string}-${string}-${string}`;
        state: "error";
    };
};

export declare const getGenericBrowserPermission: (name: PermissionName) => Observable<PermissionState>;

export declare const getIdFlipAnimationDuration: () => number;

export declare const getIdsByCredentialId: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => `${string}-${string}-${string}-${string}-${string}`[];

export declare type GetIdTypeFromCollectionParams = Static<typeof TbGetIdTypeFromCollectionParamsSchema>;

export declare type GetImageDataCallback = (params?: CameraCapturingEngineGetImageDataParams) => Promise<CameraCapturingEngineGetImageDataResult>;

export declare const getJLiveFallbackPolicy: () => JLiveFallbackPolicy;

export declare const getJumioSdkMessage: () => {
    message?: string | undefined;
    errorCode?: string | undefined;
    overlay?: boolean | undefined;
    publicErrorCode?: PublicError | undefined;
    shouldPost?: boolean | undefined;
    type: "error";
    title: string;
    id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
    date: Date;
    transactionId: string;
    closable: boolean;
} | {
    message?: string | undefined;
    overlay?: boolean | undefined;
    shouldPost?: boolean | undefined;
    type: "success";
    title: string;
    id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
    closable: boolean;
} | {
    title?: string | undefined;
    progress?: number | undefined;
    message?: string | undefined;
    overlay?: boolean | undefined;
    shouldPost?: boolean | undefined;
    type: "progress";
    id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
    closable: boolean;
} | undefined;

export declare const getLatestBackupGuid: () => string;

export declare const getLocales: () => LocaleLanguageMap[];

export declare const getLookupResponse: () => LookupResponse | undefined;

export declare const getManualCaptureFocusTime: () => number;

export declare const getMaxFileUploadLimit: () => number;

declare type GetMediaTrackConstraintSet = () => MediaTrackConstraintSet;

export declare const getMockedDeviceById: (deviceId: string) => JMediaDeviceInfo | undefined;

export declare const getPermissionByName$: (name: PermissionName) => Observable<never> | Promise<PermissionStatus>;

export declare const getPermissionState$: (name: PermissionName) => Observable<PermissionState>;

export declare const getPersistedTags: () => Tags;

export declare const getRecoveringState: () => boolean;

export declare const getRescueSessionEnabled: () => boolean;

export declare const getSafariPermission: (name: PermissionName) => Observable<PermissionState>;

export declare const getServerTime: () => number;

export declare const getSettings: () => {
    merchantSettings?: {
        branding?: {
            primaryColor?: string | undefined;
            accentColor?: string | undefined;
            logoUri?: string | undefined;
        } | undefined;
        datadog?: {
            rules?: ({
                fieldNamePattern: string;
                valuePattern: string;
            } & {
                defaultPrivacyLevel?: "mask" | "mask-user-input" | "allow" | undefined;
                sessionSampleRate?: number | undefined;
                sessionReplaySampleRate?: number | undefined;
            })[] | undefined;
            enabled: boolean;
            merchantName: string;
        } | undefined;
        autoCapture?: {
            idEnabled?: boolean | undefined;
            docVEnabled?: boolean | undefined;
            newDesign?: boolean | undefined;
        } | undefined;
        crossDevice?: {
            link?: string | undefined;
            crossDeviceOption?: "default" | "email_only" | "qr_only" | undefined;
            enabled: boolean;
        } | undefined;
        crossDeviceOnly?: boolean | undefined;
        idFlipAnimationDuration?: number | undefined;
        integrityCheck?: boolean | undefined;
        isExplicitUploadEnabled?: boolean | undefined;
        isFileUploadEnabled?: boolean | undefined;
        jLiveEnabled?: boolean | undefined;
        jLiveIod?: number | undefined;
        rescueSessionEnabled?: boolean | undefined;
        showBackNavigationButton?: boolean | undefined;
        showLanguageSelector?: boolean | undefined;
        skipDocTypeSelectionPage?: boolean | undefined;
        skipLivenessGuidancePage?: boolean | undefined;
        jLiveFallbackPolicy: "disabled" | "soft" | "strict";
    } | undefined;
    redirects?: {
        error?: string | undefined;
        success?: string | undefined;
    } | undefined;
    skipStartScreen?: boolean | undefined;
    timestamp: string;
    configurations: {
        fileUpload?: {
            isFallbackUploadEnabled: boolean;
        } | undefined;
        jumioLiveness?: {
            resolution?: {
                width: number;
                height: number;
            } | {
                height: number;
                aspectRatio: number;
            } | {
                width: number;
                aspectRatio: number;
            } | {
                width: number;
                height: number;
                aspectRatio: number;
            } | {
                aspectRatio: number;
            } | {
                height: number;
            } | {
                width: number;
            } | ({
                width: number;
                height: number;
            } | {
                height: number;
                aspectRatio: number;
            } | {
                width: number;
                aspectRatio: number;
            } | {
                width: number;
                height: number;
                aspectRatio: number;
            } | {
                aspectRatio: number;
            } | {
                height: number;
            } | {
                width: number;
            })[] | undefined;
            fallbackTimeInMs: number;
            farImages: number;
            frameRateThreshold: number;
            imageCompression: number;
            imageResolutionHeight: number;
            imageResolutionWidth: number;
            initialImages: number;
            maxConsecutiveImageTimespanInMs: number;
            maxFaceCenterDifference: number;
            maximumPseudoPitch: number;
            maximumPseudoYaw: number;
            minNearFarRatio: number;
            minTimePerDistanceInMs: number;
            minimumPseudoPitch: number;
            minimumPseudoYaw: number;
            modelInitTimeoutInMs: number;
            nearImages: number;
            retries: number;
            samplingTimeInMs: number;
            tooFarThreshold: number;
            tooNearThreshold: number;
            transitionImages: number;
            userFallbackAllowed: boolean;
            violationLimit: number;
        } | undefined;
        idAutocapture?: {
            fallbackTimeInMs?: number | undefined;
            assetsLoadingTimeoutMs?: number | undefined;
            excludeDevices?: string[] | undefined;
            focusTimeInMs?: number | undefined;
            manualFocusTimeInMs?: number | undefined;
            displayRescueCaptureButtonInMs?: number | undefined;
            optimisticFeedbackThreshold?: number | undefined;
            trackerBackdropVisible?: boolean | undefined;
            showUnifiedPhysicalIdType?: boolean | undefined;
        } | undefined;
        helpScreen?: {
            ID: number;
            FACEMAP: number;
            DOCUMENT: number;
            DATA: number;
        } | undefined;
        sensorData?: {
            intervalLog: number;
            intervalSend: number;
        } | undefined;
        supplementalImagesV2?: {
            images: ({
                classifier: "ID_SEQUENCE" | "SELFIE_SEQUENCE";
                captureFrequency: number;
                maxBatch: number;
                maxQueueSizeBytes: number;
                minBufferAge: number;
                resolutions: number[];
            } | {
                classifier: "FRONT_WITH_FLASH";
                flash: boolean;
                usabilityExpected: boolean;
            })[];
        }[] | undefined;
        uploadWebpForIdCapture?: string | undefined;
        datadog?: {
            rules?: ({
                fieldNamePattern: string;
                valuePattern: string;
            } & {
                defaultPrivacyLevel?: "mask" | "mask-user-input" | "allow" | undefined;
                sessionSampleRate?: number | undefined;
                sessionReplaySampleRate?: number | undefined;
            })[] | undefined;
        } | undefined;
        idSharpness?: {
            logSharpnessThreshold: number;
            evaluationThrottleTimeMs: number;
            sharpnessFallbackTimeoutMs: number;
            minSharpnessSequenceDurationMs: number;
            queueSize: number;
        } | undefined;
    };
    accountId: `${string}-${string}-${string}-${string}-${string}`;
    acquisitionReference: `${string}-${string}-${string}-${string}-${string}`;
    brandingEnabled: boolean;
    consents: {
        privacyPolicyUrl?: string | undefined;
        localizedPrivacyPolicyUrls?: {
            id?: string | undefined;
            hr?: string | undefined;
            th?: string | undefined;
            tr?: string | undefined;
            ms?: string | undefined;
            el?: string | undefined;
            ar?: string | undefined;
            az?: string | undefined;
            bg?: string | undefined;
            bn?: string | undefined;
            bn_IN?: string | undefined;
            "bn-IN"?: string | undefined;
            ca?: string | undefined;
            ceb?: string | undefined;
            ceb_PH?: string | undefined;
            "ceb-PH"?: string | undefined;
            cs?: string | undefined;
            da?: string | undefined;
            de?: string | undefined;
            en?: string | undefined;
            en_GB?: string | undefined;
            "en-GB"?: string | undefined;
            en_US?: string | undefined;
            "en-US"?: string | undefined;
            es?: string | undefined;
            es_MX?: string | undefined;
            "es-MX"?: string | undefined;
            et?: string | undefined;
            fi?: string | undefined;
            fil?: string | undefined;
            fil_PH?: string | undefined;
            "fil-PH"?: string | undefined;
            fr?: string | undefined;
            fr_CA?: string | undefined;
            "fr-CA"?: string | undefined;
            ga?: string | undefined;
            he?: string | undefined;
            hi?: string | undefined;
            hi_IN?: string | undefined;
            "hi-IN"?: string | undefined;
            hu?: string | undefined;
            hy?: string | undefined;
            it?: string | undefined;
            is?: string | undefined;
            ja?: string | undefined;
            jv?: string | undefined;
            jv_ID?: string | undefined;
            "jv-ID"?: string | undefined;
            ka_GE?: string | undefined;
            "ka-GE"?: string | undefined;
            kk?: string | undefined;
            km?: string | undefined;
            km_KH?: string | undefined;
            "km-KH"?: string | undefined;
            ko?: string | undefined;
            lt?: string | undefined;
            lv?: string | undefined;
            my?: string | undefined;
            my_MM?: string | undefined;
            "my-MM"?: string | undefined;
            nl?: string | undefined;
            no?: string | undefined;
            pl?: string | undefined;
            pt?: string | undefined;
            pt_BR?: string | undefined;
            "pt-BR"?: string | undefined;
            ro?: string | undefined;
            ru?: string | undefined;
            sk?: string | undefined;
            sr_Cyrl?: string | undefined;
            "sr-Cyrl"?: string | undefined;
            sr?: string | undefined;
            sr_Latn?: string | undefined;
            "sr-Latn"?: string | undefined;
            sl?: string | undefined;
            sv?: string | undefined;
            sq?: string | undefined;
            sw?: string | undefined;
            uk?: string | undefined;
            ur?: string | undefined;
            uz?: string | undefined;
            vi?: string | undefined;
            zh?: string | undefined;
            zh_CN?: string | undefined;
            "zh-CN"?: string | undefined;
            zh_HK?: string | undefined;
            "zh-HK"?: string | undefined;
        } | undefined;
        additionalData?: {
            termsOfUseText: {
                id?: string | undefined;
                hr?: string | undefined;
                th?: string | undefined;
                tr?: string | undefined;
                ms?: string | undefined;
                el?: string | undefined;
                ar?: string | undefined;
                az?: string | undefined;
                bg?: string | undefined;
                bn?: string | undefined;
                bn_IN?: string | undefined;
                "bn-IN"?: string | undefined;
                ca?: string | undefined;
                ceb?: string | undefined;
                ceb_PH?: string | undefined;
                "ceb-PH"?: string | undefined;
                cs?: string | undefined;
                da?: string | undefined;
                de?: string | undefined;
                en?: string | undefined;
                en_GB?: string | undefined;
                "en-GB"?: string | undefined;
                en_US?: string | undefined;
                "en-US"?: string | undefined;
                es?: string | undefined;
                es_MX?: string | undefined;
                "es-MX"?: string | undefined;
                et?: string | undefined;
                fi?: string | undefined;
                fil?: string | undefined;
                fil_PH?: string | undefined;
                "fil-PH"?: string | undefined;
                fr?: string | undefined;
                fr_CA?: string | undefined;
                "fr-CA"?: string | undefined;
                ga?: string | undefined;
                he?: string | undefined;
                hi?: string | undefined;
                hi_IN?: string | undefined;
                "hi-IN"?: string | undefined;
                hu?: string | undefined;
                hy?: string | undefined;
                it?: string | undefined;
                is?: string | undefined;
                ja?: string | undefined;
                jv?: string | undefined;
                jv_ID?: string | undefined;
                "jv-ID"?: string | undefined;
                ka_GE?: string | undefined;
                "ka-GE"?: string | undefined;
                kk?: string | undefined;
                km?: string | undefined;
                km_KH?: string | undefined;
                "km-KH"?: string | undefined;
                ko?: string | undefined;
                lt?: string | undefined;
                lv?: string | undefined;
                my?: string | undefined;
                my_MM?: string | undefined;
                "my-MM"?: string | undefined;
                nl?: string | undefined;
                no?: string | undefined;
                pl?: string | undefined;
                pt?: string | undefined;
                pt_BR?: string | undefined;
                "pt-BR"?: string | undefined;
                ro?: string | undefined;
                ru?: string | undefined;
                sk?: string | undefined;
                sr_Cyrl?: string | undefined;
                "sr-Cyrl"?: string | undefined;
                sr?: string | undefined;
                sr_Latn?: string | undefined;
                "sr-Latn"?: string | undefined;
                sl?: string | undefined;
                sv?: string | undefined;
                sq?: string | undefined;
                sw?: string | undefined;
                uk?: string | undefined;
                ur?: string | undefined;
                uz?: string | undefined;
                vi?: string | undefined;
                zh?: string | undefined;
                zh_CN?: string | undefined;
                "zh-CN"?: string | undefined;
                zh_HK?: string | undefined;
                "zh-HK"?: string | undefined;
            };
            termsOfUseUrl: string;
            selfieDonePolicyText: {
                id?: string | undefined;
                hr?: string | undefined;
                th?: string | undefined;
                tr?: string | undefined;
                ms?: string | undefined;
                el?: string | undefined;
                ar?: string | undefined;
                az?: string | undefined;
                bg?: string | undefined;
                bn?: string | undefined;
                bn_IN?: string | undefined;
                "bn-IN"?: string | undefined;
                ca?: string | undefined;
                ceb?: string | undefined;
                ceb_PH?: string | undefined;
                "ceb-PH"?: string | undefined;
                cs?: string | undefined;
                da?: string | undefined;
                de?: string | undefined;
                en?: string | undefined;
                en_GB?: string | undefined;
                "en-GB"?: string | undefined;
                en_US?: string | undefined;
                "en-US"?: string | undefined;
                es?: string | undefined;
                es_MX?: string | undefined;
                "es-MX"?: string | undefined;
                et?: string | undefined;
                fi?: string | undefined;
                fil?: string | undefined;
                fil_PH?: string | undefined;
                "fil-PH"?: string | undefined;
                fr?: string | undefined;
                fr_CA?: string | undefined;
                "fr-CA"?: string | undefined;
                ga?: string | undefined;
                he?: string | undefined;
                hi?: string | undefined;
                hi_IN?: string | undefined;
                "hi-IN"?: string | undefined;
                hu?: string | undefined;
                hy?: string | undefined;
                it?: string | undefined;
                is?: string | undefined;
                ja?: string | undefined;
                jv?: string | undefined;
                jv_ID?: string | undefined;
                "jv-ID"?: string | undefined;
                ka_GE?: string | undefined;
                "ka-GE"?: string | undefined;
                kk?: string | undefined;
                km?: string | undefined;
                km_KH?: string | undefined;
                "km-KH"?: string | undefined;
                ko?: string | undefined;
                lt?: string | undefined;
                lv?: string | undefined;
                my?: string | undefined;
                my_MM?: string | undefined;
                "my-MM"?: string | undefined;
                nl?: string | undefined;
                no?: string | undefined;
                pl?: string | undefined;
                pt?: string | undefined;
                pt_BR?: string | undefined;
                "pt-BR"?: string | undefined;
                ro?: string | undefined;
                ru?: string | undefined;
                sk?: string | undefined;
                sr_Cyrl?: string | undefined;
                "sr-Cyrl"?: string | undefined;
                sr?: string | undefined;
                sr_Latn?: string | undefined;
                "sr-Latn"?: string | undefined;
                sl?: string | undefined;
                sv?: string | undefined;
                sq?: string | undefined;
                sw?: string | undefined;
                uk?: string | undefined;
                ur?: string | undefined;
                uz?: string | undefined;
                vi?: string | undefined;
                zh?: string | undefined;
                zh_CN?: string | undefined;
                "zh-CN"?: string | undefined;
                zh_HK?: string | undefined;
                "zh-HK"?: string | undefined;
            };
        } | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
        text: string;
        displayType: "PASSIVE" | "ACTIVE";
        alternativeTexts: {
            id?: string | undefined;
            hr?: string | undefined;
            th?: string | undefined;
            tr?: string | undefined;
            ms?: string | undefined;
            el?: string | undefined;
            ar?: string | undefined;
            az?: string | undefined;
            bg?: string | undefined;
            bn?: string | undefined;
            bn_IN?: string | undefined;
            "bn-IN"?: string | undefined;
            ca?: string | undefined;
            ceb?: string | undefined;
            ceb_PH?: string | undefined;
            "ceb-PH"?: string | undefined;
            cs?: string | undefined;
            da?: string | undefined;
            de?: string | undefined;
            en?: string | undefined;
            en_GB?: string | undefined;
            "en-GB"?: string | undefined;
            en_US?: string | undefined;
            "en-US"?: string | undefined;
            es?: string | undefined;
            es_MX?: string | undefined;
            "es-MX"?: string | undefined;
            et?: string | undefined;
            fi?: string | undefined;
            fil?: string | undefined;
            fil_PH?: string | undefined;
            "fil-PH"?: string | undefined;
            fr?: string | undefined;
            fr_CA?: string | undefined;
            "fr-CA"?: string | undefined;
            ga?: string | undefined;
            he?: string | undefined;
            hi?: string | undefined;
            hi_IN?: string | undefined;
            "hi-IN"?: string | undefined;
            hu?: string | undefined;
            hy?: string | undefined;
            it?: string | undefined;
            is?: string | undefined;
            ja?: string | undefined;
            jv?: string | undefined;
            jv_ID?: string | undefined;
            "jv-ID"?: string | undefined;
            ka_GE?: string | undefined;
            "ka-GE"?: string | undefined;
            kk?: string | undefined;
            km?: string | undefined;
            km_KH?: string | undefined;
            "km-KH"?: string | undefined;
            ko?: string | undefined;
            lt?: string | undefined;
            lv?: string | undefined;
            my?: string | undefined;
            my_MM?: string | undefined;
            "my-MM"?: string | undefined;
            nl?: string | undefined;
            no?: string | undefined;
            pl?: string | undefined;
            pt?: string | undefined;
            pt_BR?: string | undefined;
            "pt-BR"?: string | undefined;
            ro?: string | undefined;
            ru?: string | undefined;
            sk?: string | undefined;
            sr_Cyrl?: string | undefined;
            "sr-Cyrl"?: string | undefined;
            sr?: string | undefined;
            sr_Latn?: string | undefined;
            "sr-Latn"?: string | undefined;
            sl?: string | undefined;
            sv?: string | undefined;
            sq?: string | undefined;
            sw?: string | undefined;
            uk?: string | undefined;
            ur?: string | undefined;
            uz?: string | undefined;
            vi?: string | undefined;
            zh?: string | undefined;
            zh_CN?: string | undefined;
            "zh-CN"?: string | undefined;
            zh_HK?: string | undefined;
            "zh-HK"?: string | undefined;
        };
    }[];
    countryForIp: string;
    credentials: (({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        deviceRiskVendors?: string[] | undefined;
        requiredParts?: string[] | undefined;
        type: {
            values: ("JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        category: Category.Facemap;
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type?: {
            values: ("PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        country?: {
            values: ("ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        subType?: {
            values: ("DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        deviceRiskVendors?: string[] | undefined;
        acquisitionMode?: string | undefined;
        category: Category.Id;
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type: {
            values: string[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        category: Category.Document;
        country: {
            values: ("ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        deviceRiskVendors: string[];
        requiredParts: string[];
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type?: {
            values: string[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        category: Category.Data;
        deviceRiskVendors: string[];
        requiredParts: string[];
    }))[];
    maxFileUploadSize: number;
    stateForIp: string;
    supportedDocumentTypes: {
        translations?: {
            [x: string]: string;
        } | undefined;
        code: string;
        name: string;
        maxPages: number;
    }[];
    workflowDefinitionKey: number;
};

export declare const getShownScreenEventReporter: (eventName: string) => [EventCreator<"screen", string, {
acquisitionStatus: AcquisitionStatus;
}>, EventDispatcher<    {
acquisitionStatus: AcquisitionStatus;
}>];

export declare const getStateMachineDataActions: (credentialId: UUID) => {
    readonly Finish: `${string}-${string}-${string}-${string}-${string}:data-finish`;
};

export declare const getStateMachineDocumentActions: (credentialId: UUID) => {
    readonly Finish: `${string}-${string}-${string}-${string}-${string}:document-finish`;
    readonly MobileCapture: `${string}-${string}-${string}-${string}-${string}:document-mobile-capture`;
    readonly Start: `${string}-${string}-${string}-${string}-${string}:document-start`;
    readonly UploadScreen: `${string}-${string}-${string}-${string}-${string}:document-upload-screen`;
};

export declare const getStateMachineFacemapActions: (credentialId: UUID) => {
    readonly Start: `${string}-${string}-${string}-${string}-${string}:identity-start`;
    readonly JumioStandard: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard`;
    readonly JumioStandardGuidance: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-guidance`;
    readonly JumioStandardCaptureScreen: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-capture-screen`;
    readonly JumioStandardCaptureScreenLiveness: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-capture-screen-liveness`;
    readonly JumioStandardCaptureScreenLivenessLoading: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-capture-screen-liveness-loading`;
    readonly JumioStandardCaptureScreenLivenessRetry: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-capture-screen-liveness-retry`;
    readonly JumioStandardCaptureScreenSelfie: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-capture-screen-selfie`;
    readonly JumioStandardCaptureScreenCaptureFinish: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-capture-screen-capture-finish`;
    readonly JumioStandardCaptureScreenUpload: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-capture-screen-upload`;
    readonly JumioStandardCaptureScreenUploadFailed: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-capture-screen-upload-failed`;
    readonly JumioStandardUsabilityCheck: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-usability-check`;
    readonly JumioStandardUsabilityCheckSuccess: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-usability-check-success`;
    readonly JumioStandardUsabilityCheckFailure: `${string}-${string}-${string}-${string}-${string}:identity-jumio-standard-usability-check-failure`;
    readonly Finish: `${string}-${string}-${string}-${string}-${string}:identity-finish`;
};

export declare const getStateMachineIdActions: (credentialId: UUID) => {
    readonly CaptureScreen: `${string}-${string}-${string}-${string}-${string}:id-capture-screen`;
    readonly CaptureScreenAutocaptureEntry: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-autocapture-entry`;
    readonly CaptureScreenAutocaptureFailed: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-autocapture-failed`;
    readonly CaptureScreenAutocaptureFinish: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-autocapture-finish`;
    readonly CaptureScreenAutocaptureSuccess: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-autocapture-success`;
    readonly CaptureScreenBack: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-back`;
    readonly CaptureScreenBackFinish: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-back-finish`;
    readonly CaptureScreenBackStart: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-back-start`;
    readonly CaptureScreenComplete: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-complete`;
    readonly CaptureScreenDecision: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-decision`;
    readonly CaptureScreenEntry: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-entry`;
    readonly CaptureScreenFront: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-front`;
    readonly CaptureScreenFrontFinish: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-front-finish`;
    readonly CaptureScreenFrontStart: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-front-start`;
    readonly CaptureScreenUpload: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-upload`;
    readonly CaptureScreenUploadFailed: `${string}-${string}-${string}-${string}-${string}:id-capture-screen-upload-failed`;
    readonly CaptureSourceSelection: `${string}-${string}-${string}-${string}-${string}:id-capture-source-selection`;
    readonly DigitalAuthFailed: `${string}-${string}-${string}-${string}-${string}:id-digital-auth-failed`;
    readonly DigitalProvider: `${string}-${string}-${string}-${string}-${string}:id-digital-provider`;
    readonly DigitalProviderSuccess: `${string}-${string}-${string}-${string}-${string}:id-digital-provider-success`;
    readonly DocTypeDecision: `${string}-${string}-${string}-${string}-${string}:id-doctype-decision`;
    readonly DocTypeSelection: `${string}-${string}-${string}-${string}-${string}:id-doctype-selection`;
    readonly Eidas: `${string}-${string}-${string}-${string}-${string}:id-eidas`;
    readonly EidasCheckSuccess: `${string}-${string}-${string}-${string}-${string}:id-eidas-check-success`;
    readonly Finish: `${string}-${string}-${string}-${string}-${string}:id-finish`;
    readonly IdReusabilityDecision: `${string}-${string}-${string}-${string}-${string}:id-reusability-decision`;
    readonly IdReusabilityObtained: `${string}-${string}-${string}-${string}-${string}:id-reusability-obtained`;
    readonly IdUsabilityCheck: `${string}-${string}-${string}-${string}-${string}:id-usability-check`;
    readonly IdUsabilityCheckFailure: `${string}-${string}-${string}-${string}-${string}:id-usability-check-failure`;
    readonly IdUsabilityCheckReset: `${string}-${string}-${string}-${string}-${string}:id-usability-check-reset`;
    readonly IdUsabilityCheckSuccess: `${string}-${string}-${string}-${string}-${string}:id-usability-check-success`;
    readonly IdUsabilitySupportedList: `${string}-${string}-${string}-${string}-${string}:id-usability-supported-list`;
    readonly Start: `${string}-${string}-${string}-${string}-${string}:id-start`;
    readonly Upload: `${string}-${string}-${string}-${string}-${string}:id-upload`;
    readonly UploadBraCnh: `${string}-${string}-${string}-${string}-${string}:id-upload-bra-cnh`;
};

export declare const getStateMachineInstance: () => Actor<ReturnType<typeof generateStateMachineFromCredentials>>;

export declare const getStateMachineStartScreenActions: () => {
    readonly Start: "start-screen-start";
    readonly ConsentScreen: "start-screen-consent-screen";
    readonly ProvideConsent: "start-screen-provide-consent";
    readonly Finish: "start-screen-finish";
};

export declare const getSupplementalImageConfig$: <T extends SupplementalImageClassifier>(classifier: T) => Observable<SupplementalImageClassifierMap[T] | undefined>;

export declare const getSupplementalImageFrontFlashConfig: () => {
    classifier: "FRONT_WITH_FLASH";
    flash: boolean;
    usabilityExpected: boolean;
} | undefined;

export declare const getSupportedCountryEidasTransformer: () => SupportedCountryTransformer;

export declare const getSupportedCountryPredefinitionTransformer: () => SupportedCountryTransformer;

export declare const getSupportedCountryTransformer: SupportedCountryTransformer;

export declare const getSupportedDocumentTranslationsFromSupportedDocumentTypes: (supportedDocumentTypes: SupportedDocumentType[], documentCode?: string) => {
    [x: string]: string;
};

export declare const getToken: () => TokenState;

export declare const getTransactionId: () => `${string}-${string}-${string}-${string}-${string}`;

export declare const getUiState: () => UIState;

export declare const getUpdatedDeviceListAsync: () => Promise<JMediaDeviceInfo[]>;

export declare function getWorkerData(onProgress?: DownloadProgressCallback): Promise<DataAcquisitionFetchParameters>;

export declare function getWorkflowInstance(): WorkflowController;

export declare const getWorkflowMetadata: () => {
    locale: "id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK";
    accountId: `${string}-${string}-${string}-${string}-${string}`;
    workflowId: string;
    workflowExecutionId: `${string}-${string}-${string}-${string}-${string}` | undefined;
};

export declare const getWorkflowNavigationStep: () => NavigationStepVirtualStepSetup | NavigationStepVirtualStepStart | NavigationStepCategoryId | NavigationStepCategoryFacemap | NavigationStepCategoryDocument | NavigationStepCategoryData | NavigationStepVirtualStepFinish;

export declare const getWorkflowState: () => WorkflowState;

export declare const getWorkflowStep: () => Category | VirtualStep;

export declare const getWorkflowSubstep: () => StartStep | IdStep | FacemapStep | DocumentStep | DataStep | undefined;

export declare type GetYuvProcessorCallback = (params: GetYuvProcessorCallbackParams) => Promise<undefined>;

export declare interface GetYuvProcessorCallbackParams {
    processor: MediaStreamTrackProcessor<VideoFrame> | undefined;
}

export declare class GuidanceFaceAnimationComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    isPremium: boolean;
    render(): SVGTemplateResult;
}

export declare const hasPendingUploads$: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => Observable<boolean>;

export declare const hasPendingUploadsWithProgress$: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => Observable<    {
isComplete: boolean;
items: FileStoreEntity[];
progress: number;
}>;

export declare const hasRejectedFiles$: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => Observable<boolean>;

export declare interface HelpStore {
    visible: boolean;
    timeoutMs: number;
    popupOnTimer: boolean;
    allowedSubsteps: string[];
}

export declare const iconStyles: CSSResult;

export declare const ID_CAPTURE_TYPES: {
    readonly AutoCapture: "AUTO_CAPTURE";
    readonly ManualCapture: "MANUAL_CAPTURE";
    readonly Upload: "UPLOAD";
};

declare interface IdAutoCaptureStateMessageParams extends IdCaptureStateMessageParams {
    daClientDownloadProgress: DownloadProgressCallbackParams;
    autocaptureState: AutocaptureState;
    isAutocaptureEnabled: boolean;
    smoothedFeedbackMessage: AutocaptureFeedback | undefined;
}

declare type IdCaptureMessage = IdCaptureMessageCaptured | IdCaptureMessageCaptureSide | IdCaptureMessageCaptureSideGuidance | IdCaptureMessageCenterYourDocument | IdCaptureMessageFlipDocument | IdCaptureMessageHoldStill | IdCaptureMessageLoading | IdCaptureMessageMoveAway | IdCaptureMessageMoveCloser;

declare interface IdCaptureMessageCaptureBase {
    isManualCapture: boolean;
}

declare interface IdCaptureMessageCaptured extends IdCaptureMessageCaptureBase {
    type: typeof IdCaptureMessageEnum.Captured;
}

declare interface IdCaptureMessageCaptureSide extends IdCaptureMessageCaptureBase {
    type: typeof IdCaptureMessageEnum.CaptureSide;
    currentSide: IdSide;
}

declare interface IdCaptureMessageCaptureSideGuidance extends IdCaptureMessageCaptureBase, Required<IdSideConfig> {
    type: typeof IdCaptureMessageEnum.CaptureSideGuidance;
}

declare interface IdCaptureMessageCenterYourDocument extends IdCaptureMessageCaptureBase {
    type: typeof IdCaptureMessageEnum.CenterDocument;
    currentSide: IdSide;
}

declare const IdCaptureMessageEnum: {
    readonly CaptureSide: "capture-side";
    readonly CaptureSideGuidance: "capture-side-guidance";
    readonly Captured: "captured";
    readonly CenterDocument: "center-document";
    readonly FlipDocument: "flip-document";
    readonly HoldStill: "hold-still";
    readonly Loading: "loading";
    readonly MoveAway: "move-away";
    readonly MoveCloser: "move-closer";
};

declare interface IdCaptureMessageFlipDocument extends IdCaptureMessageCaptureBase, Required<IdSideConfig> {
    type: typeof IdCaptureMessageEnum.FlipDocument;
}

declare interface IdCaptureMessageHoldStill extends IdCaptureMessageCaptureBase {
    type: typeof IdCaptureMessageEnum.HoldStill;
    progress: number;
    currentSide: IdSide;
}

declare interface IdCaptureMessageLoading {
    type: typeof IdCaptureMessageEnum.Loading;
    progress: number;
}

declare interface IdCaptureMessageMoveAway extends IdCaptureMessageCaptureBase {
    type: typeof IdCaptureMessageEnum.MoveAway;
    currentSide: IdSide;
}

declare interface IdCaptureMessageMoveCloser extends IdCaptureMessageCaptureBase {
    type: typeof IdCaptureMessageEnum.MoveCloser;
    currentSide: IdSide;
}

declare interface IdCaptureRequestState {
    captureRequestFocusStartTime: number | undefined;
    captureRequestFocusFinishTime: number | undefined;
    captureRequestTime: number | undefined;
    captureRequestType: 'auto' | 'manual' | undefined;
}

declare interface IdCaptureStateMessageParams {
    substep: WorkflowState['substep'];
    captureRequest: IdCaptureRequestState;
    captureRequestProgress: number | undefined;
}

export declare type IdCaptureTypes = ObjectValues<typeof ID_CAPTURE_TYPES>;

export declare interface IdCountryIdTypeSubtypePredefinition {
    country: CountryCode[];
    idType: IdType[];
    idSubtype: DigitalIdentitySubtypeType[];
}

export declare type IdCredentialSelection = Static<typeof TbIdCredentialSelectionSchema>;

export declare type IdEntity = Static<typeof TbIdEntitySchema>;

export declare type IdFormat = Static<typeof TbIdFormatSchema>;

export declare const IdFormatEnum: {
    readonly Id1: "ID1";
    readonly Id2: "ID2";
    readonly Id3: "ID3";
    readonly None: "NONE";
};

export declare type IdSide = Static<typeof TbIdSideSchema>;

declare type IdSide_2 = Static<typeof TbIdSideSchema_2>;

export declare const idSideClassifierMap: {
    readonly FRONT: "FRONTSIDE";
    readonly BACK: "BACKSIDE";
};

export declare class IdSideComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    config: IdSideConfig;
    activeConfig: Readonly<{
        currentSide: IdSide_2;
        targetSide: IdSide_2;
        durationMs: number;
    }>;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    getCanvas(): HTMLCanvasElement | undefined;
}

export declare interface IdSideConfig {
    currentSide?: IdSide_2;
    targetSide?: IdSide_2;
    durationMs?: number;
}

export declare const IdSideEnum: {
    readonly Front: "FRONT";
    readonly Back: "BACK";
};

export declare interface IdSidesParams {
    countryList?: SupportedCountry[];
    country: CountryCode;
    idType: IdType;
}

export declare enum IdStep {
    CaptureScreen = "id-capture-screen",
    CaptureScreenAutocaptureEntry = "id-capture-screen-autocapture-entry",
    CaptureScreenAutocaptureFinish = "id-capture-screen-autocapture-finish",
    CaptureScreenBack = "id-capture-screen-back",
    CaptureScreenBackFinish = "id-capture-screen-back-finish",
    CaptureScreenBackStart = "id-capture-screen-back-start",
    CaptureScreenComplete = "id-capture-screen-complete",
    CaptureScreenDecision = "id-capture-screen-decision",
    CaptureScreenEntry = "id-capture-screen-entry",
    CaptureScreenFront = "id-capture-screen-front",
    CaptureScreenFrontFinish = "id-capture-screen-front-finish",
    CaptureScreenFrontStart = "id-capture-screen-front-start",
    CaptureScreenUpload = "id-capture-screen-upload",
    CaptureScreenUploadFailed = "id-capture-screen-upload-failed",
    CaptureSourceSelection = "id-capture-source-selection",
    DigitalAuthFailed = "id-digital-auth-failed",
    DigitalProvider = "id-digital-provider",
    DocTypeDecision = "id-doctype-decision",
    DocTypeSelection = "id-doctype-selection",
    Eidas = "id-eidas",
    Finish = "id-finish",
    IdUsabilityCheck = "id-usability-check",
    IdUsabilityCheckFailure = "id-usability-check-failure",
    IdUsabilityCheckReset = "id-usability-check-reset",
    IdUsabilitySupportedList = "id-usability-supported-list",
    ReuseIdentity = "id-reuse",
    ReuseIdentityDecision = "id-reuse-decision",
    Start = "id-start",
    Upload = "id-upload",
    UploadBraCnh = "id-upload-bra-cnh"
}

export declare type IdType = Static<typeof TbIdTypeSchema>;

export declare const IdTypeEnum: {
    readonly DigitalIdentity: "DIGITAL_IDENTITY";
    readonly IdCard: "ID_CARD";
    readonly DrivingLicense: "DRIVING_LICENSE";
    readonly Passport: "PASSPORT";
    readonly Visa: "VISA";
};

export declare type IdTypeFound = Static<typeof TbIdTypeFoundSchema>;

export declare const IdTypeFoundEnum: {
    readonly Passport: "PASSPORT";
    readonly IdCard: "ID_CARD";
    readonly DrivingLicense: "DRIVING_LICENSE";
};

export declare class ImageCapturedEvent extends CustomEvent<ImageCapturedEventParams> {
    constructor(params: ImageCapturedEventParams);
}

export declare interface ImageCapturedEventParams {
    blob: Blob;
    width: number;
    height: number;
}

export declare const ImageCapturedEventType = "imagecaptured";

export declare const imageFormatMapping: Record<string, FileFormat>;

export declare interface ImageQueueItem {
    blob: Blob;
    timestamp: Date;
    step: WorkflowState['step'];
    substep: WorkflowState['substep'];
    credentialId: WorkflowState['credentialId'];
    frameId: number;
}

export declare class ImageViewerComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    index: number;
    images: HTMLImageElement[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}

export declare const ImageViewerEventNamesEnum: {
    readonly ImageViewerToggle: "imageviewertoggle";
};

export declare class ImageViewerRemoveEvent extends CustomEvent<ImageViewerRemoveEventParams> {
    constructor(params: ImageViewerRemoveEventParams);
}

export declare interface ImageViewerRemoveEventParams {
    name: string;
}

export declare class ImageViewerToggleEvent extends CustomEvent<unknown> {
    constructor();
}

export declare class InputComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    size: InputSize;
    placeholder: string;
    disabled: boolean;
    error: boolean;
    errorMessage: string;
    infoMessage: string;
    inputType: string;
    inputId: string;
    label: string;
    preIconElements: HTMLElement[];
    postIconElements: HTMLElement[];
    readonly inputRef: Ref_2<HTMLInputElement>;
    render(): TemplateResult<1>;
}

export declare type InputSize = Static<typeof TbInputSizeSchema>;

export declare const InputSizeEnum: {
    readonly Small: "small";
    readonly Medium: "medium";
};

export declare interface IntegrityRequest {
    payload: string;
}

export declare interface IntegrityResponse {
    hash: string;
}

export declare const isAndroid: () => boolean | undefined;

export declare const isAutocaptureActive: () => boolean;

export declare const isAutocaptureAllowed$: (type: keyof MerchantSettingsAutocapture) => Observable<boolean>;

export declare const isAutocaptureAllowed: (type: keyof MerchantSettingsAutocapture) => boolean;

export declare const isAutocaptureCaptureFallbackActivated$: () => Observable<boolean>;

export declare const isAutocaptureCaptureFallbackActivated: () => boolean;

export declare const isAutocaptureLoadable$: (type: keyof MerchantSettingsAutocapture) => Observable<boolean>;

export declare const isAutocaptureLoadable: (type: keyof MerchantSettingsAutocapture) => boolean;

export declare const isBackCamera: CameraFilterFn;

export declare const isButtonShape: (value: unknown) => value is ButtonShape;

export declare const isButtonSize: (value: unknown) => value is ButtonSize;

export declare const isButtonType: (value: unknown) => value is ButtonType;

export declare const isCameraAbortError: (e: unknown) => e is VideoError;

export declare const isCameraGenericError: (e: unknown) => e is VideoError;

export declare const isCameraPermissionDenied: (e: unknown) => e is VideoError;

export declare const isCameraPlaying: () => boolean;

export declare const isCameraSelectorOrientation: (value: unknown) => value is "vertical" | "horizontal";

export declare const isColorScheme: (value: unknown) => value is ColorScheme;

export declare const isConsentGivenSent$: () => Observable<boolean>;

export declare const isExplicitUploadEnabled: () => boolean | undefined;

export declare const isFirefox: () => boolean;

export declare const isFrontCamera: CameraFilterFn;

export declare const isIdAutocaptureBackdropVisible: () => boolean | undefined;

export declare const isIdAutocaptureNewDesign$: () => Observable<boolean>;

export declare const isIdAutocaptureNewDesign: () => boolean;

export declare const isInIframe: () => boolean;

export declare const isIos: (appleOsList?: readonly AppleOsNames[]) => boolean;

export declare const isMockedDeviceId: (deviceId: string) => boolean;

export declare const isMockingAllowed: () => boolean;

export declare const isNotBackCamera: CameraFilterFn;

export declare const isNotFrontCamera: CameraFilterFn;

export declare const isSamsungMainBackCamera: (label: string) => boolean;

export declare const isTokenExpired$: () => Observable<boolean>;

export declare const isTransactionIdValid: (transactionId: string) => boolean | "";

export declare const isWCAGCompliant: (colors: {
    primary: string;
    font: string;
}, largeText?: boolean) => {
    AA: boolean;
    AAA: boolean;
};

export declare const isWebpSupported: () => boolean;

export declare type JCredential<T extends Category = Category> = JCredentialMap[T];

export declare type JCredentialMap = Static<typeof TbJCredentialMapSchema>;

export declare interface JLiveFallbackError {
    type: ManualCaptureFallbackReason;
    message?: string;
}

export declare type JLiveFallbackPolicy = Static<typeof TbJLiveFallbackPolicySchema>;

export declare const JLiveFallbackPolicyEnum: {
    readonly Disabled: "disabled";
    readonly Soft: "soft";
    readonly Strict: "strict";
};

export declare type JMediaDeviceInfo = Pick<MediaDeviceInfo, 'deviceId' | 'groupId' | 'kind' | 'label'> & {
    capabilities: MediaTrackCapabilities;
};

export declare type JumioEnvironment = Static<typeof TbJumioEnvironmentSchema>;

export declare const JumioEnvironmentEnum: {
    readonly TestEu: "test-eu";
    readonly TestUs: "test-us";
    readonly StagingEu: "staging-eu";
    readonly StagingUs: "staging-us";
    readonly ProdEu: "prod-eu";
    readonly ProdUs: "prod-us";
    readonly ProdSgp: "prod-sgp";
    readonly Simulator: "simulator";
};

export declare type JumioLivenessResolution = Static<typeof TbJumioLivenessResolutionSchema>;

export declare type JumioLivenessResolutionCollection = Static<typeof TbJumioLivenessResolutionCollectionSchema>;

export declare type JumioLivenessSettings = Static<typeof TbJumioLivenessSettingsSchema>;

export declare class JumioSdkAutocaptureCaptureStateComponent extends JumioSdkStepIdCaptureStateComponent {
    #private;
    static styles: CSSResult[];
    transformMessage(params: IdAutoCaptureStateMessageParams): IdCaptureMessage | undefined;
    selectCaptureState$(): Observable<IdCaptureMessage>;
    getIsManualCapture(): boolean;
}

export declare class JumioSdkAutocaptureComponent extends BaseComponent implements CameraRenderingEngine, CameraCapturingEngine {
    #private;
    static styles: CSSResult[];
    isAutocaptureAvailable: AutocaptureConditionCallback;
    getBlob: GetBlobCallback;
    getImageData: GetImageDataCallback;
    readonly destroy$: Subject<void>;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    onVideoTick: VideoTickCallback;
    onYuvProcessorAvailable: GetYuvProcessorCallback;
    render(): TemplateResult<1>;
}

export declare class JumioSdkAutocaptureTrackerComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    getBlob: GetBlobCallback;
    getImageData: GetImageDataCallback;
    config: AutocaptureTrackerConfig;
    protected activeConfig: {
        message: {
            type: "captured";
            isManualCapture: boolean;
        } | {
            type: "capture-side";
            currentSide: IdSide;
            isManualCapture: boolean;
        } | {
            type: "capture-side-guidance";
            isManualCapture: boolean;
            currentSide: IdSide_2;
            targetSide: IdSide_2;
            durationMs: number;
        } | {
            type: "center-document";
            currentSide: IdSide;
            isManualCapture: boolean;
        } | {
            type: "flip-document";
            isManualCapture: boolean;
            currentSide: IdSide_2;
            targetSide: IdSide_2;
            durationMs: number;
        } | {
            type: "hold-still";
            progress: number;
            currentSide: IdSide;
            isManualCapture: boolean;
        } | {
            type: "loading";
            progress: number;
        } | {
            type: "move-away";
            currentSide: IdSide;
            isManualCapture: boolean;
        } | {
            type: "move-closer";
            currentSide: IdSide;
            isManualCapture: boolean;
        };
        activeBorder: {
            widthRatio: number;
            color: string;
            radiusRatio: number;
        };
        inactiveBorder: {
            widthRatio: number;
            color: string;
            radiusRatio: number;
        };
        placeholder: {
            visible: boolean;
            side: IdSide;
            alpha: number;
            fillFactor: number;
            debounceTimeMs: number;
        };
        backdrop: {
            visible: boolean;
            color: string;
        };
        capturing: boolean;
        idCardAspectRatio: number;
        isDebugging: boolean;
    };
    constructor();
    updated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    renderTick(): void;
    areBordersActive(): boolean;
}

export declare class JumioSdkBrandingComponent extends BaseComponent {
    #private;
    static readonly defaultColor = "5acc29";
    static styles: CSSResult[];
    get componentController(): JumioSdkBrandingController;
    constructor();
    render(): TemplateResult<1>;
}

declare class JumioSdkBrandingController implements ReactiveController {
    #private;
    readonly primaryColor$: Observable<string>;
    readonly secondaryColor$: Observable<string>;
    constructor(host: ReactiveElement);
    hostConnected(): void;
}

export declare class JumioSdkCameraErrorComponent extends ErrorMessageComponent {
    #private;
    static styles: CSSResult[];
    title: string;
    message: string;
    overlay: boolean;
    errorCode: string;
    date: Date | null;
    transactionId: string;
    render(): TemplateResult<1>;
    retry(): void;
}

export declare class JumioSdkCameraPermissionsScreenComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    disconnectedCallback(): void;
    connectedCallback(): void;
}

export declare class JumioSdkCaptureHintsComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    readonly delayedHelpDisplay$: Observable<boolean>;
    readonly visibilityStateLogging$: Observable<boolean>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1> | typeof nothing;
    setHelpVisibility(visible: boolean): void;
    rescheduleHelpPopup(): void;
}

export declare class JumioSdkComponent extends BaseComponent implements JumioSdkControllerProvider<WorkflowController, JumioSdkController> {
    #private;
    static styles: CSSResult[];
    get accountId(): string | undefined;
    get workflowExecutionId(): string | undefined;
    get workflowId(): string | undefined;
    set token(value: string);
    get token(): string;
    set sessionUrl(value: string);
    get sessionUrl(): string;
    set baseUrl(value: string);
    get baseUrl(): string;
    set dc(value: "eu" | "us" | "sgp" | undefined);
    get dc(): "eu" | "us" | "sgp" | undefined;
    set locale(value: "id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK");
    get locale(): "id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK";
    set linked(value: boolean);
    get linked(): boolean;
    set showBackButton(value: boolean | undefined);
    get showBackButton(): boolean | undefined;
    set showLanguageSelector(value: boolean | undefined);
    get showLanguageSelector(): boolean | undefined;
    languageDirection: string;
    readonly loggerSinkRef: Ref_2<JumioSdkLoggerSinkComponent>;
    workflowController: WorkflowController;
    isVisible: boolean;
    constructor();
    get componentController(): JumioSdkController;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    refreshPage(): Promise<void>;
    render(): TemplateResult_2<1> | typeof nothing;
}

export declare class JumioSdkConsentComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkConsentController> {
    #private;
    get componentController(): JumioSdkConsentController;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    consentChange(e: Event): void;
}

declare class JumioSdkConsentController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement);
    getConsentItems(): ConsentItem[];
    getConsentGiven(): boolean;
    hostConnected(): void;
    hostDisconnected(): void;
    updateConsentStatus(data: ConsentData): void;
    getLocale(): Locale;
}

declare class JumioSdkController implements ReactiveController {
    #private;
    readonly tokenExpiredMessage$: Observable<void>;
    readonly acquisitionStatusPolling$: Observable<AcquisitionStatusResponse>;
    readonly locale$: Observable<void>;
    constructor(host: JumioSdkComponent, loggerSinkRef: Ref<ReactiveElement>);
    getWorkflowController(): WorkflowController;
    hostDisconnected(): void;
    updateWorkflowParams: (previousState: WorkflowSetupParametersMandatory, currentState: WorkflowSetupParametersMandatory) => Promise<void>;
}

declare type JumioSdkControllerProvider<TWorkflowController, TComponentController> = ComponentControllerProvider<TComponentController> & {
    readonly workflowController: TWorkflowController;
};

export declare class JumioSdkCrossDeviceButtonComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    fluid: boolean;
    type: ButtonType;
    size: ButtonSize;
    readonly crossDeviceEnabledController: AsyncController<boolean, true>;
    get isLinked(): boolean;
    get isMobile(): boolean;
    render(): TemplateResult<1> | typeof nothing;
}

export declare class JumioSdkFileUploadFailedComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkFileUploadFailedController> {
    #private;
    static styles: CSSResult[];
    retryAction?: () => void;
    get componentController(): JumioSdkFileUploadFailedController;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}

declare class JumioSdkFileUploadFailedController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement);
    hostConnected(): void;
}

export declare class JumioSdkLocaleSelectionComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkLocaleSelectionController> {
    #private;
    static styles: CSSResult[];
    selectType: SelectType;
    get componentController(): JumioSdkLocaleSelectionController;
    firstUpdated(): void;
    render(): TemplateResult<1> | typeof nothing;
}

declare class JumioSdkLocaleSelectionController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement);
    hostDisconnected(): void;
    updateLocale(locale: Locale): void;
    getSelectedLocale(): Locale;
    getLocales(): LocaleLanguageMap[];
}

export declare class JumioSdkLoggerConsoleComponent extends BaseComponent implements LoggerConsoleConfig {
    readonly type = "LoggerConsole";
    isEnabled: boolean;
}

export declare class JumioSdkLoggerDatadogComponent extends BaseComponent implements LoggerDatadogRumConfig {
    readonly type = "LoggerDatadogRum";
    isEnabled: boolean;
    config: Partial<Static<typeof TbLoggerDatadogRumInitConfiguration>>;
}

export declare class JumioSdkLoggerPostMessageComponent extends BaseComponent implements LoggerPostMessageConfig {
    readonly type = "LoggerPostMessage";
    isEnabled: boolean;
}

export declare class JumioSdkLoggerSinkComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkLoggerSinkController> {
    #private;
    static styles: CSSResult[];
    constructor();
    get componentController(): JumioSdkLoggerSinkController;
    render(): TemplateResult<1>;
}

declare class JumioSdkLoggerSinkController implements ReactiveController {
    #private;
    workflowController: WorkflowController;
    loggerManager: LoggerManager;
    readonly reportUnhandledFetchError$: Observable<PromiseRejectionEvent>;
    readonly reportUnhandledError$: Observable<ErrorEvent>;
    readonly cameraError$: Observable<Error>;
    constructor(host: ReactiveElement);
    logEvent(event: AnalyticEvent): void;
    reportEvent(event: ReportEvent): void;
    hostConnected(): void;
    hostDisconnected(): void;
    getReportUnhandledFetchError$(): Observable<PromiseRejectionEvent>;
    getReportUnhandledError$(): Observable<ErrorEvent>;
    getCameraErrorMessage$(): Observable<Error>;
}

export declare class JumioSdkLoggingComponent extends BaseComponent {
    #private;
    loggerConfig: LoggerConfigBase<string>[];
    constructor();
    connectedCallback(): void;
    render(): TemplateResult<1>;
    disconnectedCallback(): void;
    getScreenLogging$(): Observable<unknown>;
}

export declare class JumioSdkLogotypeComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    readonly componentController: JumioSdkLogotypeController;
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult_2<1> | typeof nothing;
}

declare class JumioSdkLogotypeController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    getLogoFromSettings(): string | undefined;
}

export declare type JumioSdkMessage = Static<typeof TbJumioSdkMessageSchema>;

export declare class JumioSdkMessageCloseEvent extends CustomEvent<JumioSdkMessageCloseEventDetail | undefined> {
    constructor(params?: JumioSdkMessageCloseEventDetail);
}

export declare const jumioSdkMessageCloseEvent = "jmessageclose";

declare interface JumioSdkMessageCloseEventDetail {
    id: JumioSdkMessageId;
}

export declare type JumioSdkMessageError = Static<typeof TbJumioSdkMessageErrorSchema>;

export declare class JumioSdkMessageEvent extends CustomEvent<JumioSdkMessage> {
    constructor(message: JumioSdkMessage);
}

export declare const jumioSdkMessageEvent = "jmessage";

export declare type JumioSdkMessageId = Static<typeof TbJumioSdkMessageIdSchema>;

export declare const JumioSdkMessageIdEnum: {
    readonly AcquisitionFailed: "acquisition-failed";
    readonly AcquisitionSuccessful: "acquisition-success";
    readonly UsabilityCheck: "usability-check";
    readonly CameraGenericError: "camera-generic-error";
    readonly CameraNotAllowedError: "camera-not-allowed-error";
    readonly CameraInitialization: "camera-initialization";
    readonly SessionExpired: "session-expired";
    readonly Uploading: "uploading";
    readonly Finalizing: "finalizing";
    readonly EmbargoedCountry: "embargoed-country";
    readonly LivenessFailed: "liveness-failed";
    readonly EidasFailed: "eidas-failed";
    readonly LookUpId: "look-up-id";
    readonly SubmittingConsent: "submitting-consent";
};

export declare type JumioSdkMessageProgress = Static<typeof TbJumioSdkMessageProgressSchema>;

export declare class JumioSdkMessageScreenComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1> | typeof nothing;
}

export declare class JumioSdkMessageService {
    #private;
    constructor();
    showMessage(message: JumioSdkMessage): void;
    streamMessage$(message$?: Observable<JumioSdkMessage | undefined>): Subscription;
    showMessageIfPossible(message: JumioSdkMessage): void;
    clearMessage(): void;
    closeActiveClosableMessage(): void;
    closeActiveClosableMessageById(...ids: JumioSdkMessageId[]): void;
    getMessage(): {
        message?: string | undefined;
        errorCode?: string | undefined;
        overlay?: boolean | undefined;
        publicErrorCode?: PublicError | undefined;
        shouldPost?: boolean | undefined;
        type: "error";
        title: string;
        id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
        date: Date;
        transactionId: string;
        closable: boolean;
    } | {
        message?: string | undefined;
        overlay?: boolean | undefined;
        shouldPost?: boolean | undefined;
        type: "success";
        title: string;
        id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
        closable: boolean;
    } | {
        title?: string | undefined;
        progress?: number | undefined;
        message?: string | undefined;
        overlay?: boolean | undefined;
        shouldPost?: boolean | undefined;
        type: "progress";
        id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
        closable: boolean;
    } | undefined;
}

export declare const jumioSdkMessageService: JumioSdkMessageService;

export declare interface JumioSdkMessageState {
    message: JumioSdkMessage | undefined;
}

export declare type JumioSdkMessageSuccess = Static<typeof TbJumioSdkMessageSuccessSchema>;

export declare type JumioSdkMessageType = Static<typeof TbJumioSdkMessageTypeSchema>;

export declare const JumioSdkMessageTypeEnum: {
    readonly Error: "error";
    readonly Success: "success";
    readonly Progress: "progress";
};

export declare class JumioSdkNavigationBrowserComponent extends BaseComponent implements NavigationService {
    #private;
    static isTheSameNavigationStep(a: Pick<WorkflowState, 'credentialId' | 'step' | 'substep'>, b: Pick<WorkflowState, 'credentialId' | 'step' | 'substep'>): boolean;
    static styles: CSSResult[];
    transformUrl: NavigationUrlTransformer;
    baseUrl: string;
    navigationService: this;
    interceptors: JumioSdkNavigationInterceptor[];
    navigationConfig: NavigationConfig<typeof NavigationTypeEnum.Browser>[];
    private lastPushedState;
    private initialWorkflowState;
    popState$: Observable<void>;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
    back(): void;
    pushState: ({ data, url, unused }: UpdateStateParams) => void;
    replaceState: ({ data, url, unused }: UpdateStateParams) => void;
    hasHistoryItems(): boolean;
    popState(state: unknown): void;
    updateWorkflowState(params: Partial<WorkflowState>): void;
    recreateStateMachine: (params: CreateStateMachine) => void;
    getLastPushedState(): BackupEntryDescriptor | undefined;
}

export declare class JumioSdkNavigationButtonComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    type: "quiet";
    shape: "round";
    selectType: "default";
    readonly navigationService: NavigationService | undefined;
    render(): TemplateResult<1> | typeof nothing;
}

export declare class JumioSdkNavigationComponent extends BaseComponent implements JumioSdkStepNavigationForwardController {
    #private;
    static styles: CSSResult[];
    navigationConfig: NavigationConfig<NavigationType_2>[];
    firstUpdated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    get workflowController(): WorkflowController;
    render(): TemplateResult<1>;
    handleNavigationForward: () => void;
    handleNavigationBackward: () => void;
    getNavigationType(): NavigationType_2;
}

export declare class JumioSdkNavigationConfigBrowserComponent extends LitElement implements NavigationConfig<typeof NavigationTypeEnum.Browser> {
    readonly type: "browser";
    transformUrl: ({ originalUrl, suggestedUrlPart }: NavigationUrlTransformerParams) => string;
    baseUrl: string;
}

export declare class JumioSdkNavigationConfigMemoryComponent extends LitElement implements NavigationConfig<typeof NavigationTypeEnum.Memory> {
    readonly type: "memory";
}

export declare interface JumioSdkNavigationInterceptor {
    shouldStoreState: (navigationStep: NavigationStep) => boolean | undefined;
}

export declare class JumioSdkNavigationInterceptorComponent extends LitElement implements JumioSdkNavigationInterceptor {
    shouldStoreState(navigationStep: NavigationStep): boolean;
}

export declare class JumioSdkNavigationMemoryComponent extends BaseComponent implements NavigationService {
    #private;
    static styles: CSSResult[];
    navigationService: this;
    interceptors: JumioSdkNavigationInterceptor[];
    navigationConfig: NavigationConfig<typeof NavigationTypeEnum.Memory>[];
    popState$: Observable<void>;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    back(): void;
    pushState: (entry: BackupEntry) => void;
    hasHistoryItems(): boolean;
    reset(): void;
    getHistoryItems(): BackupEntry[];
    recreateStateMachine: (params: CreateStateMachine) => void;
}

export declare type JumioSdkScheduledMessage = Static<typeof TbJumioSdkScheduledMessageSchema>;

export declare class JumioSdkSendLinkByEmailComponent extends BaseComponent implements ReactiveElement {
    #private;
    static styles: CSSResult[];
    email: string;
    inputComponent: Ref_2<InputComponent>;
    readonly controller: JumioSdkSendLinkByEmailComponentController;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    onKeyUpChange(e: FocusEvent): void;
    onInputBlur(e: FocusEvent): void;
    clickHandler(): void;
    isButtonDisabled(): boolean;
}

declare class JumioSdkSendLinkByEmailComponentController implements ReactiveController {
    #private;
    readonly emailResponse$: Subject<EmailResponse>;
    constructor(host: ReactiveElement);
    get locale(): "id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK";
    hostConnected(): void;
    hostDisconnected(): void;
    sendEmail(emailRequest: EmailRequest): void;
}

export declare class JumioSdkStepCrossDeviceComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    readonly controller: JumioSdkStepCrossDeviceController;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult_2;
}

declare class JumioSdkStepCrossDeviceController implements ReactiveController {
    #private;
    readonly crossDeviceOption$: Observable<CrossDeviceOption | undefined>;
    constructor(host: ReactiveElement);
    get baseUrl(): string;
    get token(): string;
    get locale(): "id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK";
    get crossDeviceUrl$(): Observable<URL | undefined>;
    hostConnected(): void;
    hostDisconnected(): void;
}

export declare class JumioSdkStepDataComponent extends BaseComponent {
    #private;
    get componentController(): JumioSdkStepDataController;
    connectedCallback(): void;
    render(): symbol;
    importLoaderJs(): Promise<void>;
    loadIovation(): Promise<void>;
    sendTokenData(token: DeviceRiskToken): Promise<void> | undefined;
    goToNextStep(): void;
}

declare class JumioSdkStepDataController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    isIovation(): boolean;
    sendTokenData(deviceRiskData: DeviceRiskToken): Promise<void>;
    goToNextStep(): void;
}

export declare class JumioSdkStepDocumentCaptureComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkStepDocumentCaptureController> {
    #private;
    static styles: CSSResult[];
    readonly componentController: JumioSdkStepDocumentCaptureController;
    readonly cameraRef: Ref_2<CameraComponent>;
    constructor();
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    logImageCapturedEvent: (e: ImageCapturedEvent) => Promise<void>;
    uploadImage: (e: ImageCapturedEvent) => Promise<void>;
}

declare class JumioSdkStepDocumentCaptureController implements ReactiveController {
    #private;
    readonly workflowController: WorkflowController;
    readonly stepController: WorkflowStepController<Category.Document>;
    constructor(host: JumioSdkStepDocumentCaptureComponent);
    hostConnected(): void;
    hostDisconnected(): void;
    upload(request: UploadRequest): Promise<UploadResponse>;
    getStepController(): WorkflowStepDocumentController;
}

export declare class JumioSdkStepDocumentComponent extends BaseComponent implements WorkflowStepControllerProvider<WorkflowStepController<Category.Document>> {
    #private;
    static styles: CSSResult[];
    constructor();
    get workflowStepController(): WorkflowStepDocumentController;
    render(): TemplateResult<1> | typeof nothing;
}

export declare class JumioSdkStepDocumentUploadComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkStepDocumentUploadController> {
    #private;
    static styles: CSSResult[];
    readonly componentController: JumioSdkStepDocumentUploadController;
    readonly documentCodeController: AsyncController<SupportedDocumentType | undefined>;
    readonly fileEntitiesController: AsyncController<FileStoreEntity[] | undefined>;
    readonly maxFileUploadSizeController: AsyncController<number>;
    readonly pdfFilesController: AsyncController<RadioListItem[] | undefined>;
    constructor();
    handlePdfSelection(): Promise<void>;
    render(): TemplateResult<1>;
}

declare class JumioSdkStepDocumentUploadController implements ReactiveController {
    #private;
    readonly document$: Observable<SupportedDocumentType | undefined>;
    readonly maxFileUploadSize$: Observable<number>;
    readonly pdfFiles$: Subject<RadioListItemWithFile[] | undefined>;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    uploadFile(file: File): Promise<UploadResponse>;
    softDeletePdfPage(id: UUID): void;
    confirmSelection(): Promise<void>;
    selectUploadedPdfFile(): Promise<Blob | undefined>;
    getLocale(): "id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK";
    getSupportedDocumentTranslationsFromSettings(documentCode?: string): {
        [x: string]: string;
    };
    checkPdfUpload(newFile: File): Promise<boolean>;
    cancelPdfSelection(): void;
    dropFilesByCriteria(callback: FindFileMetadataByParamsCallback): void;
}

export declare class JumioSdkStepFacemapCaptureStateComponent extends BaseComponent {
    #private;
    captureStateController: AsyncController<StartStep | IdStep | FacemapStep | DocumentStep | DataStep | undefined, false>;
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepFacemapComponent extends BaseComponent implements ControllerProvider<WorkflowStepController<Category.Facemap>, JumioSdkStepFacemapController> {
    #private;
    static styles: CSSResult[];
    stepInformationController: AsyncController<StartStep | IdStep | FacemapStep | DocumentStep | DataStep | undefined, false>;
    readonly componentController: JumioSdkStepFacemapController;
    get workflowStepController(): WorkflowStepController<Category.Facemap>;
    render(): TemplateResult<1> | typeof nothing;
}

declare class JumioSdkStepFacemapController implements ReactiveController {
    #private;
    constructor(host: JumioSdkStepFacemapComponent);
    hostConnected(): void;
    hostDisconnected(): void;
    selectVerificationMethods$(): Observable<("JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM")[]>;
    selectActiveVerificationMethod$(): Observable<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM" | undefined>;
    selectFacemapStepInformation$(): Observable<StartStep | IdStep | FacemapStep | DocumentStep | DataStep | undefined>;
    getStepChange$(): Observable<[StartStep | IdStep | FacemapStep | DocumentStep | DataStep | undefined, ("JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM")[], "JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM" | undefined]>;
}

export declare class JumioSdkStepFacemapJumioStandardCaptureComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkStepFacemapJumioStandardCaptureController> {
    #private;
    static styles: CSSResult[];
    readonly componentController: JumioSdkStepFacemapJumioStandardCaptureController;
    readonly cameraRef: Ref_2<CameraComponent>;
    constructor();
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1> | typeof nothing;
    logImageCapturedEvent: (e: ImageCapturedEvent) => Promise<void>;
    onImageCapture: (e: ImageCapturedEvent) => Promise<void>;
    requestUpload: (request: UploadRequestEvent) => void;
}

declare class JumioSdkStepFacemapJumioStandardCaptureController implements ReactiveController {
    #private;
    constructor(host: JumioSdkStepFacemapJumioStandardCaptureComponent);
    hostConnected(): void;
    hostDisconnected(): void;
    requestUpload(params: UploadRequestEvent): void;
    upload(): Promise<UploadResponse>;
}

export declare class JumioSdkStepFacemapJumioStandardComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkStepFacemapJumioStandardController> {
    #private;
    static styles: CSSResult[];
    readonly componentController: JumioSdkStepFacemapJumioStandardController;
    getActiveStep(): string | undefined;
    render(): TemplateResult<1> | typeof nothing;
}

declare class JumioSdkStepFacemapJumioStandardController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    hostDisconnected(): void;
}

export declare class JumioSdkStepFacemapJumioStandardIntroductionComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepFacemapUsabilityCheckComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepFinishComponent extends BaseComponent implements ControllerProvider<WorkflowStepController<VirtualStep.Finish>, JumioSdkStepFinishController> {
    #private;
    static styles: CSSResult[];
    constructor();
    get workflowStepController(): WorkflowStepController<VirtualStep.Finish>;
    get componentController(): JumioSdkStepFinishController;
    render(): TemplateResult<1> | typeof nothing;
}

declare class JumioSdkStepFinishController implements ReactiveController {
    #private;
    readonly finalize$: Observable<RequestOutcome<FinalizeResponse | undefined, unknown>>;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    getController(): WorkflowStepController<VirtualStep.Finish>;
    getFinalize$(): Observable<RequestOutcome<FinalizeResponse | undefined, unknown>>;
}

export declare class JumioSdkStepIdCaptureComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkStepIdCaptureController> {
    #private;
    static styles: CSSResult[];
    readonly componentController: JumioSdkStepIdCaptureController;
    readonly cameraRef: Ref_2<CameraComponent>;
    readonly supportedCountriesController: AsyncController<SupportedCountry[], true>;
    readonly captureMessageController: AsyncController<IdCaptureMessage, true>;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    uploadImage: ({ withoutFlash, withFlash, captureRequest, supplementalImages }: UploadImageParams) => void;
}

declare class JumioSdkStepIdCaptureController implements ReactiveController {
    #private;
    readonly workflowController: WorkflowController;
    readonly stepController: WorkflowStepController<Category.Id>;
    constructor(host: JumioSdkStepIdCaptureComponent);
    hostConnected(): void;
    hostDisconnected(): void;
    upload(request: UploadRequest): Promise<UploadResponse | {
        usabilityResultKeys: {};
    }>;
    shouldCapture(side: PhysicalDocumentSideClassifier): boolean;
    areAllSidesCaptured(): boolean;
}

export declare class JumioSdkStepIdCaptureSourceComponentComponent extends BaseComponent {
    #private;
    readonly crossDeviceEnabledController: AsyncController<boolean, false>;
    static styles: CSSResult[];
    get isLinked(): boolean;
    get isMobile(): boolean;
    get isCrossDeviceVisible(): boolean;
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepIdCaptureStateComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    message: IdCaptureMessage;
    readonly captureStateAsyncController: AsyncController<IdCaptureMessage, false>;
    render(): TemplateResult<1> | typeof nothing;
    renderCaptureSide(params: IdCaptureMessageCaptureSide): TemplateResult<1>;
    renderCaptureSideLegacy(params: IdCaptureMessageCaptureSide): TemplateResult<1>;
    renderCaptureSideGuidance(params: IdCaptureMessageCaptureSideGuidance): TemplateResult<1>;
    renderCaptureSideGuidanceLegacy(params: IdCaptureMessageCaptureSideGuidance): TemplateResult<1>;
    renderFlipDocument(params: IdCaptureMessageFlipDocument): TemplateResult<1>;
    renderFlipDocumentLegacy(params: IdCaptureMessageFlipDocument): TemplateResult<1>;
    renderMoveCloser(): TemplateResult<1>;
    renderMoveCloserLegacy(): TemplateResult<1>;
    renderMoveAway(): TemplateResult<1>;
    renderMoveAwayLegacy(): TemplateResult<1>;
    renderHoldStill(params: IdCaptureMessageHoldStill): TemplateResult<1>;
    renderHoldStillLegacy(params: IdCaptureMessageHoldStill): TemplateResult<1>;
    renderCenterDocument(): TemplateResult<1>;
    renderCenterDocumentLegacy(): TemplateResult<1>;
    renderLoading(params: IdCaptureMessageLoading): TemplateResult<1>;
    renderLoadingLegacy(params: IdCaptureMessageLoading): TemplateResult<1>;
    renderCaptured(): TemplateResult<1>;
    renderCapturedLegacy(): TemplateResult<1>;
    getIsManualCapture(): boolean;
    transformMessage(params: IdCaptureStateMessageParams): IdCaptureMessage | undefined;
    selectCaptureState$(): Observable<IdCaptureMessage>;
    updateCaptureStateMessage$(): Observable<IdCaptureMessage>;
}

export declare class JumioSdkStepIdComponent extends LitElement implements ControllerProvider<WorkflowStepController<Category.Id>, JumioSdkStepIdController> {
    #private;
    static styles: CSSResult[];
    componentController: JumioSdkStepIdController;
    constructor();
    get workflowStepController(): WorkflowStepController<Category.Id>;
    render(): TemplateResult<1> | typeof nothing;
}

declare class JumioSdkStepIdController implements ReactiveController {
    #private;
    constructor(host: JumioSdkStepIdComponent, workflowController?: WorkflowController);
    hostConnected(): void;
    hostDisconnected(): void;
    isDocumentTypeSelected(params: StoreForIdCredential): params is {
        selectedCountry: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE";
        selectedIdType: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA";
    } | {
        selectedCountry: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE";
        selectedIdType: "DIGITAL_IDENTITY";
        selectedIdSubtype: "EIDAS";
    } | {
        selectedCountry: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE";
        selectedIdType: "DIGITAL_IDENTITY";
        selectedIdSubtype: "DIGITAL_DRIVING_LICENSE_PDF";
    } | {
        selectedCountry: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE";
        selectedIdType: "DIGITAL_IDENTITY";
        selectedIdSubtype: "MASTERCARD";
    };
    getStepSelection$(): Observable<StartStep | IdStep | FacemapStep | DocumentStep | DataStep | undefined>;
    handleStart(): void;
    handleDocTypeDecision(): Promise<void>;
}

export declare class JumioSdkStepIdCountrySelectionComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkStepIdCountrySelectionController> {
    #private;
    static styles: CSSResult[];
    get componentController(): JumioSdkStepIdCountrySelectionController;
    render(): TemplateResult<1>;
}

declare class JumioSdkStepIdCountrySelectionController implements ReactiveController {
    #private;
    readonly countryList$: Observable<Country[]>;
    constructor(host: ReactiveElement);
    hostDisconnected(): void;
    selectCountry(country?: unknown): void;
    getSelectedCountry$(): Observable<CountryCode | undefined>;
}

export declare class JumioSdkStepIdDocumentCollectionComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkStepIdDocumentCollectionController> {
    #private;
    static styles: CSSResult[];
    digitalEntities: DigitalIdentity[] | undefined;
    private static readonly MAX_DIGITAL_IDS_IN_PAGE;
    get componentController(): JumioSdkStepIdDocumentCollectionController;
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1> | typeof nothing;
    getSubheaderForDocumentType(idType: PhysicalIdType): string;
}

declare class JumioSdkStepIdDocumentCollectionController implements ReactiveController {
    #private;
    readonly availableIdTypes$: Observable<IdEntity[]>;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    selectCredentialType(entity: IdEntity | 'physical-id'): void;
    getSidesForDocumentType(idType: PhysicalIdType): ("FRONTSIDE" | "BACKSIDE")[];
    getIsTrustCheckOutOfAttempts({ provider }: TrustCheckDigitalIdentity): boolean;
    showCombinedPhysicalIdType(): boolean;
}

export declare class JumioSdkStepIdDocumentTypeComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepIdReuseComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    readonly termsOfUseController: AsyncController<LocalizedTermsOfUse | undefined, true>;
    readonly policyTextController: AsyncController<string | undefined, true>;
    get componentController(): JumioSdkStepIdReuseController;
    constructor();
    render(): TemplateResult<1>;
}

declare class JumioSdkStepIdReuseController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    getTermsOfUse$(): Observable<LocalizedTermsOfUse | undefined>;
    getPolicyText$(): Observable<string | undefined>;
    getLocale(): "id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK";
}

export declare class JumioSdkStepIdReuseDecisionComponent extends BaseComponent {
    #private;
    constructor();
    get componentController(): JumioSdkStepIdReuseDecisionController;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

declare class JumioSdkStepIdReuseDecisionController implements ReactiveController {
    #private;
    readonly lookupResult$: Observable<RequestOutcome<LookupResponse | undefined, unknown>>;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    getExistingId$(): Observable<RequestOutcome<LookupResponse | undefined, unknown>>;
}

declare abstract class JumioSdkStepIdUploadBaseComponent extends BaseComponent implements ComponentControllerProvider<JumioSdkStepIdUploadBaseController> {
    #private;
    static styles: CSSResult[];
    uploadErrorMessage$: BehaviorSubject<Partial<Record<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`, FilePickerError | undefined>>>;
    uploadErrorMessageController: AsyncController<UploadErrorMessageMap>;
    partsController: AsyncController<ClassifierWithUploadState[]>;
    readyController: AsyncController<boolean>;
    imageCollectionController: AsyncController<ClassifierWithUploadState[], true>;
    webpSupportedController: AsyncController<boolean, true>;
    componentController: JumioSdkStepIdUploadBaseController;
    constructor();
    disconnectedCallback(): void;
    abstract createComponentController(): JumioSdkStepIdUploadBaseController;
    render(): TemplateResult<1>;
    getErrorMessage(error: FilePickerError): string;
    renderImageGallery(): TemplateResult<1>;
    renderUploadImageInstruction(part: ClassifierWithUploadState): TemplateResult<1>;
    renderUploadTitle(type: Classifier): string;
    renderUploadInstructions: RenderUploadInstructionsFn;
    renderProgressMessage: RenderPartFn;
    renderCheckingImageMessage: RenderPartFn;
    renderFilePickerErrorMessage: RenderFilePickerErrorFn;
    renderUploadBoxInstructions: RenderPartFn;
    renderFilePickerEmptyState: RenderPartFn;
    renderFilePickerPart: RenderPartFn;
    setErrorMessageForClassifier(classifier: Classifier, message: FilePickerError | undefined): void;
    renderTitle(params: StoreForIdCredential): string;
    renderInstantFeedback: RenderPartFn;
}

declare class JumioSdkStepIdUploadBaseController implements ReactiveController {
    #private;
    readonly parts$: Observable<ClassifierWithUploadState[]>;
    readonly ready$: Observable<boolean>;
    readonly stepController: WorkflowStepController<Category.Id>;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    removeFile(id: UUID): void;
    getReady$(): Observable<boolean>;
    uploadFile(event: FileUploadEvent, part: ClassifierWithUploadState): Promise<UploadResponse | {
        usabilityResultKeys: {};
    }>;
    applyUsabilityOperators(params: CheckUsabilityParamsWithId): UnaryFunction<Observable<UsabilityResult>, Observable<UsabilityResult>>;
    isClassifierEnabled(entries: FileStoreEntity[], classifier: Classifier): boolean;
    getParts$(): Observable<ClassifierWithUploadState[]>;
}

export declare class JumioSdkStepIdUploadBraCnhComponent extends JumioSdkStepIdUploadBaseComponent {
    #private;
    static styles: CSSResult[];
    constructor();
    createComponentController(): JumioSdkStepIdUploadBraCnhController;
    renderUploadImageInstruction(part: ClassifierWithUploadState): TemplateResult<1>;
    renderUploadInstructions: RenderUploadInstructionsFn;
    renderUploadBoxInstructions: RenderPartFn;
    getErrorMessage(error: FilePickerError): string;
    renderTitle(): string;
}

declare class JumioSdkStepIdUploadBraCnhController extends JumioSdkStepIdUploadBaseController {
    getParts$(): Observable<ClassifierWithUploadState[]>;
    applyUsabilityOperators(): identity;
}

export declare class JumioSdkStepIdUploadComponent extends JumioSdkStepIdUploadBaseComponent {
    createComponentController(): JumioSdkStepIdUploadController;
}

export declare class JumioSdkStepIdUploadController extends JumioSdkStepIdUploadBaseController {
}

export declare class JumioSdkStepIdUsabilityCheckButtonComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    readonly rejectedImageCollection$: Observable<    {
    thumbnail?: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "not-started";
    } | {
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "progress";
    } | {
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "success";
    thumbnail: {
    width: number;
    height: number;
    base64: string;
    };
    } | {
    error: unknown;
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "error";
    } | undefined;
    upload: {
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    docvProcessed?: boolean | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "success";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
    usabilityId: string;
    };
    usability: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "success";
    result: {
    extractedData?: {
    address?: string | undefined;
    country?: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE" | undefined;
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    city?: string | undefined;
    dateOfBirth?: string | undefined;
    documentNumber?: string | undefined;
    expiryDate?: string | undefined;
    firstName?: string | undefined;
    gender?: string | undefined;
    idSubType?: string | undefined;
    issuingCountry?: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE" | undefined;
    issuingDate?: string | undefined;
    lastName?: string | undefined;
    mrzLine1?: string | undefined;
    mrzLine2?: string | undefined;
    mrzLine3?: string | undefined;
    nationality?: string | undefined;
    personalNumber?: string | undefined;
    placeOfBirth?: string | undefined;
    postalCode?: string | undefined;
    rawBarcodeData?: string | undefined;
    subdivision?: string | undefined;
    } | undefined;
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    decisionType: "REJECT";
    rejectReason: {
    reasonCode: "0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501";
    };
    };
    };
    }[]>;
    retry(): void;
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepIdUsabilityCheckComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    readonly stepController: WorkflowStepController<Category.Id>;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepIdUsabilityCheckFailedComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    retryMessage: HTMLElement;
    carrouselOffset: number;
    readonly rejectedFileStoreEntities$: Observable<    {
    thumbnail?: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "not-started";
    } | {
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "progress";
    } | {
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "success";
    thumbnail: {
    width: number;
    height: number;
    base64: string;
    };
    } | {
    error: unknown;
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "error";
    } | undefined;
    upload: {
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    docvProcessed?: boolean | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "success";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
    usabilityId: string;
    };
    usability: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    state: "success";
    result: {
    extractedData?: {
    address?: string | undefined;
    country?: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE" | undefined;
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    city?: string | undefined;
    dateOfBirth?: string | undefined;
    documentNumber?: string | undefined;
    expiryDate?: string | undefined;
    firstName?: string | undefined;
    gender?: string | undefined;
    idSubType?: string | undefined;
    issuingCountry?: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE" | undefined;
    issuingDate?: string | undefined;
    lastName?: string | undefined;
    mrzLine1?: string | undefined;
    mrzLine2?: string | undefined;
    mrzLine3?: string | undefined;
    nationality?: string | undefined;
    personalNumber?: string | undefined;
    placeOfBirth?: string | undefined;
    postalCode?: string | undefined;
    rawBarcodeData?: string | undefined;
    subdivision?: string | undefined;
    } | undefined;
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    decisionType: "REJECT";
    rejectReason: {
    reasonCode: "0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501";
    };
    };
    };
    }[]>;
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepIdUsabilityCheckRetryMessageComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    fileStoreEntity: FileStoreEntityWithDecisionReject | undefined;
    render(): TemplateResult<1> | typeof nothing | undefined;
    get componentController(): JumioSdkStepIdUsabilityCheckRetryMessageController;
}

declare class JumioSdkStepIdUsabilityCheckRetryMessageController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    openSupportedIdsList(): void;
}

export declare class JumioSdkStepIdUsabilityUploadButtonComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    render(): TemplateResult<1> | typeof nothing;
}

declare interface JumioSdkStepNavigationForwardController {
    handleNavigationForward(e: Event): void;
}

export declare class JumioSdkStepSetupComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    render(): TemplateResult<1>;
}

export declare class JumioSdkStepStartComponent extends BaseComponent implements ControllerProvider<WorkflowStepController<VirtualStep.Start>, JumioSdkStepStartController> {
    #private;
    static styles: CSSResult[];
    stepInformationController: AsyncController<StartStep | IdStep | FacemapStep | DocumentStep | DataStep | undefined, false>;
    get workflowStepController(): WorkflowStepController<VirtualStep.Start>;
    get componentController(): JumioSdkStepStartController;
    render(): TemplateResult<1> | typeof nothing;
}

export declare class JumioSdkStepStartConsentComponent extends BaseComponent implements ControllerProvider<WorkflowStepController<VirtualStep.Start>, JumioSdkStepStartConsentController> {
    #private;
    static styles: CSSResult[];
    colorScheme: ColorScheme;
    readonly documentCodeController: AsyncController<SupportedDocumentType[], true>;
    readonly termsOfUseController: AsyncController<LocalizedTermsOfUse | undefined, true>;
    get workflowStepController(): WorkflowStepController<VirtualStep.Start>;
    get componentController(): JumioSdkStepStartConsentController;
    constructor();
    render(): TemplateResult<1>;
    renderInstructionsForCategories(params?: RenderInstructionsForCategoriesParams): TemplateResult<1>;
}

declare class JumioSdkStepStartConsentController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement, workflow?: WorkflowController);
    getController(): WorkflowStepController<VirtualStep.Start>;
    getAllConsentsGiven(): boolean;
    sendConsentData(): Promise<object>;
    goToNextStep(): void;
    hostConnected(): void;
    hostDisconnected(): void;
    getDocumentTypes$(): Observable<    {
    translations?: {
    [x: string]: string;
    } | undefined;
    code: string;
    name: string;
    maxPages: number;
    }[]>;
    getLocale(): Locale;
    getSupportedDocumentTranslationsFromSettings(documentCode?: string): {
        [x: string]: string;
    };
    getCredentials(): (({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        deviceRiskVendors?: string[] | undefined;
        requiredParts?: string[] | undefined;
        type: {
            values: ("JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        category: Category.Facemap;
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type?: {
            values: ("PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        country?: {
            values: ("ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        subType?: {
            values: ("DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        deviceRiskVendors?: string[] | undefined;
        acquisitionMode?: string | undefined;
        category: Category.Id;
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type: {
            values: string[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        category: Category.Document;
        country: {
            values: ("ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        deviceRiskVendors: string[];
        requiredParts: string[];
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type?: {
            values: string[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        category: Category.Data;
        deviceRiskVendors: string[];
        requiredParts: string[];
    }))[];
    getTermsOfUse$(): Observable<LocalizedTermsOfUse | undefined>;
}

declare class JumioSdkStepStartController implements ReactiveController {
    #private;
    readonly dispatchNextScreen$: Observable<unknown>;
    constructor(host: ReactiveElement, workflow?: WorkflowController);
    hostConnected(): void;
    hostDisconnected(): void;
    navigateToNextScreen(settings: Settings, stateManager?: Actor<StateMachine<MachineContext, AnyEventObject, {}, never, {
    type: "setWorkflowStep";
    params: NavigationStep;
    }, never, never, {
    step: VirtualStep.Setup | VirtualStep.Finish | {
    start: StartStep;
    };
    activeScreen: "workflow" | "cross-device";
    }, string, NonReducibleUnknown, NonReducibleUnknown, EventObject, MetaObject, {
    id: "@jumio/websdk workflow state machine";
    states: {
    readonly step: {
    id: "step";
    states: {
    readonly finish: {};
    readonly start: {
    states: {
    readonly "start-screen-start": {};
    readonly "start-screen-consent": {};
    readonly "start-screen-finish": {};
    };
    };
    readonly setup: {};
    };
    };
    readonly activeScreen: {
    id: "active screen state machine";
    states: {
    readonly workflow: {};
    readonly "cross-device": {};
    };
    };
    };
    }>>): void;
    getNavigateToNextScreen$(): Observable<Settings>;
}

export declare class JumioSdkSupplementalImagesComponent extends BaseComponent implements CameraRenderingEngine, CameraCapturingEngine {
    #private;
    static styles: CSSResult[];
    updateNotifier?: SupplementalImageUpdateNotifier;
    set config(value: ConfigurationSupplementalImageSequence | null | undefined);
    get config(): ConfigurationSupplementalImageSequence | null | undefined;
    set uploadType(value: SupplementalImageUploadTypePrefix | null | undefined);
    get uploadType(): SupplementalImageUploadTypePrefix | null | undefined;
    category: Category;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    onVideoTick: VideoTickCallback;
    getImageData: GetImageDataCallback;
    getBlob: GetBlobCallback;
    getImages(): MultipartFile[];
    getFps(): number;
    update(changedProperties: PropertyValues<this>): void;
    getBufferAge(): number;
    updateActivationTime(): void;
}

export declare class JumioSdkSupportedIdSearchComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    supportedCountries: AsyncController<{
        country: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE";
        idTypes: ({
            idType: "ID_CARD";
            variants: {
                format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
                variant: "PAPER" | "PLASTIC";
                parts: {
                    side: "FRONT" | "BACK";
                }[];
            }[];
        } | {
            idType: "DRIVING_LICENSE";
            variants: {
                format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
                variant: "PAPER" | "PLASTIC";
                parts: {
                    side: "FRONT" | "BACK";
                }[];
            }[];
        } | {
            idType: "PASSPORT";
            variants: {
                format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
                variant: "PAPER" | "PLASTIC";
                parts: {
                    side: "FRONT" | "BACK";
                }[];
            }[];
        } | {
            idType: "VISA";
            variants: {
                format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
                variant: "PAPER" | "PLASTIC";
                parts: {
                    side: "FRONT" | "BACK";
                }[];
            }[];
        } | {
            provider?: string | undefined;
            logoUrl?: string | undefined;
            title: string;
            subType: "TRUST_CHECK";
            idType: "DIGITAL_IDENTITY";
        } | {
            title: string;
            subType: "DIGITAL_DRIVING_LICENSE_PDF";
            idType: "DIGITAL_IDENTITY";
            file: "PDF";
        } | {
            title: string;
            subType: "MASTERCARD";
            idType: "DIGITAL_IDENTITY";
        } | {
            title: string;
            subType: "EIDAS";
            idType: "DIGITAL_IDENTITY";
        })[];
    }[], false>;
    inputComponent: Ref_2<InputComponent>;
    onInputChange: () => void;
    render(): TemplateResult<1>;
}

export declare class JumioSdkThemeComponent extends BaseComponent {
    colorScheme: ColorScheme;
    colorSchemeService: ColorSchemeService | undefined;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}

export declare class JumioSdkUploadButtonComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    fluid: boolean;
    type: ButtonType;
    size: ButtonSize;
    clickHandler: ButtonClickEventHandler;
    constructor();
    render(): TemplateResult<1> | typeof nothing;
}

export declare const languageDirectionContext: {
    __context__: string;
};

export declare type LegacyErrorCode = Static<typeof TbLegacyErrorCodeSchema>;

export declare const LegacyErrorCodeEnum: {
    readonly SystemError: 9100;
    readonly AuthTokenError: 9200;
    readonly AuthSessionError: 9210;
    readonly FileUploadError: 9300;
    readonly ConsentSubmissionError: 9301;
    readonly UsabilityError: 9400;
    readonly UserOffline: 9800;
    readonly UnhandledError: 9801;
    readonly BrowserDoesNotSupportCamera: 9822;
    readonly AuthFailed: 9836;
    readonly CredentialError: 9900;
};

export declare const lighten: (hex: string, ratio: number) => string;

export declare type LinkedModule = Static<typeof TbLinkedModuleSchema>;

export declare const LinkedModuleEnum: {
    readonly Mrz: "MRZ";
    readonly Nfc: "NFC";
    readonly Barcode: "BARCODE";
    readonly LineFinder: "LINEFINDER";
    readonly DocFinder: "DOCFINDER";
    readonly Manual: "MANUAL";
    readonly FaceManual: "FACE_MANUAL";
    readonly DataDog: "DATADOG";
    readonly Sardine: "SARDINE";
    readonly Iovation: "IOVATION";
    readonly JumioLiveness: "JUMIO_LIVENESS";
    readonly DigitalIdentity: "DIGITAL_IDENTITY";
};

export declare class ListComponent extends BaseComponent {
    static styles: CSSResult[];
    dataFlattenerCallback?: ListFlattenerCallbackFunction;
    itemRenderer: ListComponentItemRenderer;
    data: Iterable<unknown>;
    render(): TemplateResult<1>;
}

export declare type ListComponentItemRenderer<T = unknown> = (params: ListComponentItemRendererParams<T>) => TemplateResult_2<1> | typeof nothing;

export declare interface ListComponentItemRendererParams<T> {
    item: ListItemEntity<T>;
    isFirst: boolean;
    isLast: boolean;
}

export declare type ListFlattenerCallbackFunction<T = unknown, R = T> = (value: Iterable<T>) => ListItemEntity<R>[];

export declare interface ListItemEntity<T = unknown> {
    depth?: number;
    value: T;
}

export declare const LIVENESS_CAPTURE_TYPES: {
    readonly JumioStandard: "JUMIO_STANDARD";
    readonly JumioLiveness: "JUMIO_LIVENESS";
    readonly JumioPremium: "JUMIO_PREMIUM";
    readonly ManualSelfie: "MANUAL_SELFIE";
};

export declare type LivenessCaptureTypes = ObjectValues<typeof LIVENESS_CAPTURE_TYPES>;

export declare class LivenessFaceAnimationComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): SVGTemplateResult;
}

export declare interface LivenessFaceFinder {
    cxRatio: number;
    cyRatio: number;
    frameAspectRatio: number;
    fillRatio: number;
}

export declare type LivenessFaceFinderDistance = 'far' | 'initial' | 'near';

export declare interface LivenessFaceFinderEllipse extends LivenessFaceFinder {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
}

export declare const livenessInitialized: EventDispatcher<    {
step: string;
}>;

export declare const livenessManualSelfieFallback: EventDispatcher<    {
step: string;
reason: string;
}>;

export declare const livenessModuleLoadingFailed: EventDispatcher<    {
step: string;
}>;

export declare const livenessProgressEvent: EventDispatcher<    {
jliveProgressCurrentStep: number;
jliveProgressStepsTotal: number;
jLiveStepDuration: number;
jLiveDuration: number;
isFullscreen: boolean;
cls?: CameraLivenessStatus;
clsm?: CameraLivenessStatus;
}>;

export declare type LivenessRefDistance = 'far' | 'initial' | 'near';

export declare type LivenessResult = Static<typeof TbLivenessResultSchema>;

export declare const LivenessResultEnum: {
    readonly True: "TRUE";
    readonly False: "FALSE";
    readonly Bo: "BO";
};

export declare interface LivenessState {
    jLiveAttemptNo: number;
    jLiveCameraCommand: UXCameraCommand | undefined;
    jLiveDisplayMessage: UXDisplayMessage;
    jLivePhotinusColor: string | undefined;
    jLiveProgressCurrentStep: number;
    jLiveProgressStepsTotal: number;
    jLiveUiCommand: UXUICommand | undefined;
    jLiveVisibleFaceFinder: LivenessRefDistance;
    jLiveManualCaptureFallbackReason: ManualCaptureFallbackReason | undefined;
    jLiveFallbackError: JLiveFallbackError | undefined;
}

export declare class LoadingIndicatorComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult_2<1>;
}

declare type Locale = Static<typeof TbLocaleSchema>;

export declare class LocaleChangeEvent extends CustomEvent<{
    previousLocale: Locale;
    currentLocale: Locale;
}> {
    constructor(previousLocale: Locale, currentLocale: Locale);
}

export declare interface LocaleLanguageMap {
    keys: Locale[];
    label: string;
}

export declare interface LocalizedTermsOfUse {
    text: string;
    link: string;
}

export declare const lockOrientation: (orientation?: OrientationType) => void;

export declare type LogEventBody<ET extends EventType = EventType, EN extends string = string, M extends EventMetadata = EventMetadata> = AnalyticEventBody<ET, EN, M> | ReportEventBody<ET, EN, M>;

export declare interface Logger {
    isEnabled: boolean;
    getId(): string;
    log(message: AnalyticEventBody): Promise<unknown>;
    report(message: ReportEventBody): Promise<unknown>;
    updateConfig?<T extends LoggerConfigBase<unknown>>(config: T): void;
    cleanUp?(): void;
}

export declare interface LoggerConfigBase<T> {
    readonly type: T;
    isEnabled: boolean;
}

declare type LoggerConsoleConfig = LoggerConfigBase<typeof LoggerConsoleId>;

declare const LoggerConsoleId = "LoggerConsole";

declare type LoggerDatadogRumConfig = Static<typeof TbLoggerDatadogRumParams>;

export declare interface LoggerManager {
    addLogger(logger: Logger): void;
    removeLogger(logger: Logger): void;
    removeLoggerById(id: string): void;
    getLoggerById(id: string): Logger | undefined;
    log(body: AnalyticEventBody): void;
    report(body: ReportEventBody): void;
}

declare type LoggerPostMessageConfig = LoggerConfigBase<typeof LoggerPostMessageId>;

declare const LoggerPostMessageId = "LoggerPostMessage";

export declare type LogLevel = Static<typeof TbLogLevelSchema>;

export declare const LogLevelEnum: {
    readonly Trace: "trace";
    readonly Debug: "debug";
    readonly Info: "info";
    readonly Warn: "warn";
    readonly Error: "error";
    readonly None: "none";
};

export declare interface LookupResponse {
    state: LookupState;
    idType?: IdTypeFound;
}

export declare type LookupState = Static<typeof TbLookupStateSchema>;

export declare const LookupStateEnum: {
    readonly Found: "FOUND";
    readonly NotFound: "NOT_FOUND";
};

export declare type ManualCaptureFallbackReason = Static<typeof TbManualCaptureFallbackReasonSchema>;

export declare const ManualCaptureFallbackReasonEnum: {
    readonly ModuleLoadingError: "module-loading-error";
    readonly ModuleInitializationError: "module-initialization-error";
    readonly WorkerCrashed: "worker-crashed";
    readonly WorkerError: "worker-error";
    readonly PostMessageError: "post-message-error";
    readonly Struggle: "struggle";
    readonly ResourceFetchTimeout: "resource-fetch-timeout";
    readonly Timeout: "timeout";
    readonly UserSelection: "user-selection";
    readonly ExcludedDevice: "excluded-device";
};

declare type MediaDeviceMetadata = Partial<Pick<MediaDeviceInfo, 'deviceId' | 'groupId' | 'kind' | 'label'>>;

export declare type MerchantSettings = Static<typeof TbMerchantSettingsSchema>;

export declare type MerchantSettingsAutocapture = Static<typeof TbMerchantSettingsAutocaptureSchema>;

export declare type MerchantSettingsBranding = Static<typeof TbMerchantSettingsBrandingSchema>;

export declare type MerchantSettingsCrossDevice = Static<typeof TbMerchantSettingsCrossDeviceSchema>;

export declare class MessageDetailsComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    title: string;
    message: string;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult_2<1>;
}

export declare class ModalComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult_2<1>;
}

declare type Mode = 'secure+';

export declare interface MultipartConsent {
    id: string;
    timestamp: number | undefined;
    displayType: ConsentDisplayType;
}

export declare interface MultipartFile {
    multipartName: UUID;
    fileType: FileFormat;
    uploadType: Classifier;
    captureMethod?: IdCaptureTypes | LivenessCaptureTypes;
    docType?: string;
    usabilityExpected: boolean;
    fileMetaData?: Record<string, unknown>;
    file: Blob;
    integrity?: string;
    riskSignals?: RiskSignals;
    cls?: CameraLivenessStatus;
    clsm?: CameraLivenessStatus;
    country?: CountryCode;
    idType?: IdType;
}

export declare interface MultipartFiles {
    files: MultipartFile[];
    applyUsabilityFilter?: boolean;
}

export declare type NavigationConfig<T extends NavigationType_2> = NavigationConfigMap[T];

export declare interface NavigationConfigBrowser {
    readonly type: typeof NavigationTypeEnum.Browser;
    transformUrl: NavigationUrlTransformer;
    baseUrl: string;
}

export declare interface NavigationConfigMap {
    [NavigationTypeEnum.Memory]: NavigationConfigMemory;
    [NavigationTypeEnum.Browser]: NavigationConfigBrowser;
}

export declare interface NavigationConfigMemory {
    readonly type: typeof NavigationTypeEnum.Memory;
}

export declare type NavigationService = Pick<History, 'back' | 'pushState'> & {
    hasHistoryItems(): boolean;
    popState$: Observable<void>;
};

export declare type NavigationStep<T extends CredentialStep = CredentialStep> = NavigationStepMap[T];

export declare interface NavigationStepBase<TStep extends CredentialStep, TSubstep> {
    step: TStep;
    substep: TSubstep;
    credentialId: UUID | undefined;
    shouldStoreNavigationState: boolean;
    activeScreen: ActiveScreen;
}

export declare type NavigationStepCategoryData = NavigationStepBase<Category.Data, DataStep>;

export declare type NavigationStepCategoryDocument = NavigationStepBase<Category.Document, DocumentStep>;

export declare type NavigationStepCategoryFacemap = NavigationStepBase<Category.Facemap, FacemapStep>;

export declare type NavigationStepCategoryId = NavigationStepBase<Category.Id, IdStep>;

export declare interface NavigationStepMap {
    [VirtualStep.Setup]: NavigationStepVirtualStepSetup;
    [VirtualStep.Start]: NavigationStepVirtualStepStart;
    [Category.Id]: NavigationStepCategoryId;
    [Category.Facemap]: NavigationStepCategoryFacemap;
    [Category.Document]: NavigationStepCategoryDocument;
    [Category.Data]: NavigationStepCategoryData;
    [VirtualStep.Finish]: NavigationStepVirtualStepFinish;
}

export declare type NavigationStepSubstep<T extends CredentialStep = CredentialStep> = NavigationStep<T>['substep'];

export declare type NavigationStepVirtualStepFinish = NavigationStepBase<VirtualStep.Finish, undefined>;

export declare type NavigationStepVirtualStepSetup = NavigationStepBase<VirtualStep.Setup, undefined>;

export declare type NavigationStepVirtualStepStart = NavigationStepBase<VirtualStep.Start, StartStep>;

declare type NavigationType_2 = Static<typeof TbNavigationTypeSchema>;
export { NavigationType_2 as NavigationType }

export declare const NavigationTypeEnum: {
    readonly Browser: "browser";
    readonly Memory: "memory";
};

export declare type NavigationUrlTransformer = ({ originalUrl, stepData, suggestedUrlPart }: NavigationUrlTransformerParams) => string;

export declare interface NavigationUrlTransformerParams {
    originalUrl: string;
    stepData: NavigationStep;
    suggestedUrlPart: string;
}

export declare const noCameraConnection: ErrorCase;

export declare const noFilterFn: FileListFilter;

declare type ObjectValues<T> = T[keyof T];

export declare const observableFromRef: <T extends HTMLElement = HTMLElement>(ref: Ref<T>, refreshNotifier$: Observable<void>) => Observable<T>;

export declare const observeResize$: ({ el, ResizeObserverClass, requestAnimationFrameFn, cancelAnimationFrameFn }: ObserveResizeParams) => Observable<DsDimensions>;

export declare interface ObserveResizeParams {
    el: HTMLElement;
    ResizeObserverClass?: typeof ResizeObserver;
    requestAnimationFrameFn?: typeof window.requestAnimationFrame;
    cancelAnimationFrameFn?: typeof window.cancelAnimationFrame;
}

declare type OmitDeep<T, K extends keyof any> = T extends OmitDeepPrimitive ? T : T extends (infer U)[] ? OmitDeep<U, K>[] : T extends object ? {
    [P in keyof T as P extends K ? never : P]: OmitDeep<T[P], K>;
} : T;

declare type OmitDeepPrimitive = boolean | number | string | null | undefined;

export declare type Orientation = Static<typeof TbOrientationSchema>;

export declare const OrientationEnum: {
    readonly Landscape: "landscape";
    readonly Portrait: "portrait";
};

export declare class OrientationLockComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    orientationType: OrientationType;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

export declare class PageContainerComponent extends BaseComponent {
    static styles: CSSResult[];
    fullscreenModeController: AsyncController<boolean, false>;
    render(): TemplateResult<1>;
}

export declare const pageContainerVisible$: BehaviorSubject<boolean>;

export declare const patchAutocaptureStore: (params?: Partial<AutocaptureStore>) => void;

export declare const patchPersistedTags: (dataOrMergeFn: Tags | ((prev: Tags) => Tags)) => void;

export declare class PermissionLifecycleComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): symbol;
}

declare type PermissionQuery = typeof navigator.permissions.query;

export declare interface PermissionStore {
    camera: PermissionState;
}

export declare type PhysicalDocument = Static<typeof TbPhysicalDocumentSchema>;

export declare type PhysicalDocumentSideClassifier = Static<typeof TbPhysicalDocumentSideClassifierSchema>;

export declare const PhysicalDocumentSideClassifierEnum: {
    readonly FrontSide: "FRONTSIDE";
    readonly BackSide: "BACKSIDE";
};

export declare interface PhysicalDocumentSideQueryParams {
    countryCode: CountryCode;
    idType: PhysicalIdType;
    classifier: PhysicalDocumentSideClassifier;
}

export declare type PhysicalIdType = Static<typeof TbPhysicalIdTypeSchema>;

export declare const PhysicalIdTypeEnum: {
    readonly IdCard: "ID_CARD";
    readonly DrivingLicense: "DRIVING_LICENSE";
    readonly Passport: "PASSPORT";
    readonly Visa: "VISA";
};

export declare interface PointInCircle {
    circleX: number;
    circleY: number;
    circleR: number;
    targetPt: AutocaptureDocXY;
}

export declare const poweredByVisible: {
    __context__: boolean;
};

export declare type PredefinedType = Static<typeof TbPredefinedTypeSchema>;

export declare const PredefinedTypeEnum: {
    readonly Defined: "DEFINED";
    readonly Recommended: "RECOMMENDED";
    readonly Optional: "OPTIONAL";
};

export declare class PreviewImageRequestEvent extends CustomEvent<FileStoreEntity> {
    constructor(params: FileStoreEntity);
}

declare type Primitive = bigint | boolean | number | string | symbol | null | undefined;

export declare const processCannotBeCompleted: ErrorCase;

export declare class ProgressMessageComponent extends BaseComponent {
    static styles: CSSResult[];
    title: string;
    message: string;
    overlay: boolean;
    render(): TemplateResult_2<1>;
}

export declare class PromptLoaderComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    state: PromptLoaderState;
    progress: number;
    hidePlusOnInitialState: boolean;
    progressTransitionDuration: number;
    progressDisableTransition: boolean;
    render(): TemplateResult<1>;
}

export declare type PromptLoaderState = Static<typeof TbPromptLoaderStateSchema>;

export declare const PromptLoaderStateEnum: {
    readonly Initial: "initial";
    readonly Progress: "progress";
    readonly Pulsing: "pulsing";
};

export declare type ProvideConsentRequest = MultipartConsent;

export declare interface PublicError {
    isRetryable: () => boolean;
    domain: () => ErrorDomain;
    code: () => string;
    legacyCode: () => LegacyErrorCode;
}

export declare const publicError: EventDispatcher<    {
errorCode: string;
}>;

export declare class QrCodeComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    uri: string;
    darkColor: string;
    lightColor: string;
    constructor();
    updated(): void;
    render(): TemplateResult_2;
    toCanvas(canvasElement: HTMLCanvasElement, text: QRCodeSegment[] | string, options: QRCodeRenderersOptions, callback: (error: Error | null | undefined) => void): void;
}

export declare class RadioListComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    items: RadioListItem[];
    render(): TemplateResult_2<1>;
}

export declare interface RadioListItem {
    label: string;
    value: string;
    selected: boolean;
}

declare interface RadioListItemWithFile extends RadioListItem {
    file: File;
}

export declare class RadioListSelectionEvent extends CustomEvent<RadioListSelectionEventParams> {
    constructor(params: RadioListSelectionEventParams);
}

export declare interface RadioListSelectionEventParams {
    name: string;
}

export declare const ReasonCodeEnum: {
    readonly GENERIC: "0";
    readonly MANIPULATED_DOCUMENT: "100";
    readonly PHOTOCOPY: "102";
    readonly PHOTOCOPY_COLOR: "103";
    readonly DIGITAL_COPY: "104";
    readonly WELL_KNOWN_FRAUDSTER: "105";
    readonly WELL_KNOWN_FAKE: "106";
    readonly PERSON_HOLDING_THE_DOCUMENT_IS_NOT_MATCHING_THE_PHOTO: "107";
    readonly MRZ_CHECK_FAILED: "108";
    readonly PUNCHED: "109";
    readonly CHIP_DATA_MANIPULATED: "110";
    readonly MISMATCH_PRINTED_BARCODE_DATA: "111";
    readonly CHIP_MISSING: "112";
    readonly MISMATCH_DATA_REPEATED_FACE: "113";
    readonly DIGITAL_MANIPULATION: "114";
    readonly MISMATCH_HRZ_MRZ_DATA: "115";
    readonly SUPERIMPOSED_TEXT: "116";
    readonly MISMATCH_FRONT_BACK: "118";
    readonly HIGH_FRAUD_RISK: "119";
    readonly NOT_READABLE: "200";
    readonly BLURRED: "2001";
    readonly BAD_QUALITY: "2002";
    readonly MISSING_PART_DOCUMENT: "2003";
    readonly HIDDEN_PART_DOCUMENT: "2004";
    readonly DAMAGED_DOCUMENT: "2005";
    readonly GLARE: "2006";
    readonly NO_DOCUMENT: "201";
    readonly SAMPLE_DOCUMENT: "202";
    readonly MISSING_BACK: "206";
    readonly MISSING_FRONT: "214";
    readonly MANUAL_REJECTION: "300";
    readonly TOO_MUCH_MOVEMENT: "3002";
    readonly TOO_BRIGHT: "3003";
    readonly TOO_DARK: "3004";
    readonly EYES_CLOSED: "3005";
    readonly FACE_OBSCURED: "3006";
    readonly MULTIPLE_FACES: "3007";
    readonly SUNGLASSES: "3008";
    readonly NOT_MAX_BRIGHTNESS: "3009";
    readonly UNSUPPORTED_DOCUMENT: "401";
    readonly INVALID_CERTIFICATE: "501";
};

export declare type ReasonCodeEnumKey = keyof typeof ReasonCodeEnum;

export declare type ReasonCodeEnumValue = (typeof ReasonCodeEnum)[keyof typeof ReasonCodeEnum];

export declare const ReasonCodeToErrorEnum: Record<ReasonCodeEnumValue, ReasonCodeEnumKey>;

export declare const recreateStateMachine: ({ credentials, setWorkflowStepCallback, initialState, snapshotValue }: CreateStateMachine) => Actor<StateMachine<MachineContext, AnyEventObject, {}, never, {
type: "setWorkflowStep";
params: NavigationStep;
}, never, never, {
step: import("../../../types/src/index.js").VirtualStep.Setup | import("../../../types/src/index.js").VirtualStep.Finish | {
start: StartStep;
};
activeScreen: "workflow" | "cross-device";
}, string, NonReducibleUnknown, NonReducibleUnknown, EventObject, MetaObject, {
id: "@jumio/websdk workflow state machine";
states: {
readonly step: {
id: "step";
states: {
readonly finish: {};
readonly start: {
states: {
readonly "start-screen-start": {};
readonly "start-screen-consent": {};
readonly "start-screen-finish": {};
};
};
readonly setup: {};
};
};
readonly activeScreen: {
id: "active screen state machine";
states: {
readonly workflow: {};
readonly "cross-device": {};
};
};
};
}>>;

export declare const recreateWorkflow: () => WorkflowController;

export declare const redirectionEvent: EventDispatcher<    {
url: string;
type: "ERROR" | "SUCCESS";
errorCode?: string;
}>;

export declare const redirectToErrorPage: (errorUrl?: string, publicError?: PublicError, setTargetLocation?: (url: string) => void) => void;

export declare const redirectToSuccessPage: (successUrl?: string, setTargetLocation?: (url: string) => void) => void;

export declare const removeFileStoreItemsByIds: (...id: UUID[]) => void;

export declare const removeNonPassedUploads: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => void;

export declare const removeUploadAndUsabilityEntitiesByCredentialId: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => void;

declare type RenderFilePickerErrorFn = (filePickerError: FilePickerError, part: ClassifierWithUploadState) => TemplateResult_2<1>;

declare interface RenderInstructionsForCategoriesParams {
    categories?: Category[];
    areSettingsFetched?: boolean;
}

declare type RenderPartFn = (part: ClassifierWithUploadState) => TemplateResult_2<1> | typeof nothing;

declare type RenderUploadInstructionsFn = (selection: StoreForIdCredential) => TemplateResult_2;

export declare class ReportEvent<T extends ReportEventBody = ReportEventBody> extends CustomEvent<T> {
    constructor(detail: T);
}

export declare type ReportEventBody<ET extends EventType = EventType, EN extends string = string, M extends EventMetadata = EventMetadata> = EventBodyBase<ET, EN, M>;

export declare const reportUploadProgress$: (params?: ExtendedUploadProgressParams) => Observable<FileStoreEntity[]>;

export declare const requestCameraPlayback: (command: SwitchCameraCommand | SwitchStreamCommand | undefined) => void;

export declare const requestCameraPlaybackRetry: () => void;

export declare type RequestCode = Static<typeof TbRequestCodeSchema>;

export declare const RequestCodeEnum: {
    readonly Unknown: 0;
    readonly SettingsCall: 1;
    readonly ExtractDataCall: 3;
    readonly UploadCall: 4;
    readonly ReportingCall: 5;
    readonly FinalizeCall: 6;
    readonly UsabilityCall: 7;
    readonly ConsentCall: 8;
    readonly Integrity: 9;
    readonly DigitalIdentityWebViewCall: 10;
    readonly DigitalIdentityOutcomeCall: 11;
    readonly StatusCall: 20;
    readonly CrossDeviceEmailCall: 21;
    readonly GetFilePartCall: 22;
    readonly UpdateMetadata: 23;
    readonly EIDASUrl: 24;
    readonly LookupCall: 25;
    readonly TrustCheckUrl: 26;
    readonly TrustCheckStatus: 27;
};

export declare type RequestOutcome<TSuccess, TError> = RequestOutcomeError<TError> | RequestOutcomeLoading | RequestOutcomeReady | RequestOutcomeSuccess<TSuccess>;

export declare interface RequestOutcomeError<TError = unknown> {
    type: typeof RequestStatusTypeEnum.Error;
    errorCode?: string;
    error: TError;
}

export declare interface RequestOutcomeLoading {
    type: typeof RequestStatusTypeEnum.Loading;
}

export declare interface RequestOutcomeReady {
    type: typeof RequestStatusTypeEnum.Ready;
}

export declare interface RequestOutcomeSuccess<TSuccess = unknown> {
    type: typeof RequestStatusTypeEnum.Success;
    result: TSuccess;
}

export declare type RequestStatusType = Static<typeof TbRequestStatusTypeSchema>;

export declare const RequestStatusTypeEnum: {
    readonly Ready: "ready";
    readonly Success: "success";
    readonly Error: "error";
    readonly Loading: "loading";
};

export declare const rescueCaptureActivated$: BehaviorSubject<boolean>;

export declare const resetActiveDeviceId: () => void;

export declare const resetAutocaptureState: () => void;

export declare const resetCameraPlayback: () => void;

export declare const resetDeviceStore: () => void;

export declare const resetPersistedTags: (newTags?: Tags) => void;

export declare const resetStores: () => void;

export declare const resetUiState: () => void;

export declare const resetWorkflowInstance: () => void;

export declare interface Resolution {
    width: number;
    height: number;
}

export declare const restartAutocaptureStep: () => void;

export declare type RestoreFromBackup = () => void;

export declare interface RiskSignals {
    deviceId?: string;
    deviceLabel?: string;
    groupId?: string;
    installationId?: string;
}

export declare const runtime: EventDispatcher<EventMetadata>;

export declare const saturate: (hex: string, ratio: number) => string;

export declare interface ScanningTransition {
    scanningBorderOpacity1: number;
    scanningBorderOpacity2: number;
    borderLineDashOffset: number;
    borderWidth: number;
    borderLineDashPart1: number;
    borderLineDashPart2: number;
    faceFinderCx: number;
    faceFinderCy: number;
    faceFinderRx: number;
    faceFinderRy: number;
    circumference: number;
}

export declare class ScanQrCodeComponent extends BaseComponent {
    static styles: CSSResult[];
    uri: string;
    readonly qrCodeRef: Ref_2<QrCodeComponent>;
    render(): TemplateResult_2<1>;
}

export declare type SdkType = Static<typeof TbSdkTypeSchema>;

export declare const SdkTypeEnum: {
    readonly Iovation: "IOVATION";
};

export declare const selectActiveTrackState$: () => Observable<ActiveTrackState | undefined>;

export declare const selectAggregatedFeedback$: (fpsThreshold: number) => Observable<AutocaptureFeedback | undefined>;

export declare const selectAllSupportedCountries$: () => Observable<{
    country: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE";
    idTypes: ({
        idType: "ID_CARD";
        variants: {
            format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
            variant: "PAPER" | "PLASTIC";
            parts: {
                side: "FRONT" | "BACK";
            }[];
        }[];
    } | {
        idType: "DRIVING_LICENSE";
        variants: {
            format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
            variant: "PAPER" | "PLASTIC";
            parts: {
                side: "FRONT" | "BACK";
            }[];
        }[];
    } | {
        idType: "PASSPORT";
        variants: {
            format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
            variant: "PAPER" | "PLASTIC";
            parts: {
                side: "FRONT" | "BACK";
            }[];
        }[];
    } | {
        idType: "VISA";
        variants: {
            format?: "ID1" | "ID2" | "ID3" | "NONE" | undefined;
            variant: "PAPER" | "PLASTIC";
            parts: {
                side: "FRONT" | "BACK";
            }[];
        }[];
    } | {
        provider?: string | undefined;
        logoUrl?: string | undefined;
        title: string;
        subType: "TRUST_CHECK";
        idType: "DIGITAL_IDENTITY";
    } | {
        title: string;
        subType: "DIGITAL_DRIVING_LICENSE_PDF";
        idType: "DIGITAL_IDENTITY";
        file: "PDF";
    } | {
        title: string;
        subType: "MASTERCARD";
        idType: "DIGITAL_IDENTITY";
    } | {
        title: string;
        subType: "EIDAS";
        idType: "DIGITAL_IDENTITY";
    })[];
}[]>;

export declare const selectAutocaptureDocFinder$: () => Observable<AutocaptureStateDocFinderPosition>;

export declare const selectAutocaptureExcludedDevices$: () => Observable<string[]>;

export declare const selectAutocaptureRescueCaptureState$: () => Observable<boolean>;

export declare const selectAutocaptureRestart$: () => Observable<undefined>;

export declare const selectAutocaptureSettings$: () => Observable<{
    fallbackTimeInMs?: number | undefined;
    assetsLoadingTimeoutMs?: number | undefined;
    excludeDevices?: string[] | undefined;
    focusTimeInMs?: number | undefined;
    manualFocusTimeInMs?: number | undefined;
    displayRescueCaptureButtonInMs?: number | undefined;
    optimisticFeedbackThreshold?: number | undefined;
    trackerBackdropVisible?: boolean | undefined;
    showUnifiedPhysicalIdType?: boolean | undefined;
}>;

export declare const selectAutocaptureState$: () => Observable<"loading" | "active" | "manual-capture-fallback" | "not-loaded">;

export declare const selectAutocaptureStore$: () => Observable<AutocaptureStore>;

export declare const selectCameraBusyStatus$: () => Observable<boolean>;

export declare const selectCameraPermissionState$: () => Observable<PermissionState>;

export declare const selectCameraPlaybackRequest$: () => Observable<SwitchCameraCommand | SwitchStreamCommand>;

export declare const selectCameraSelectorDeviceList$: () => Observable<    {
devices: JMediaDeviceInfo[];
currentDevice: JMediaDeviceInfo | undefined;
isBusy: boolean;
}>;

export declare const selectCameraState$: () => Observable<    {
resolution: Resolution;
activeTrackState: ActiveTrackState | undefined;
cameraFacingMode: CameraFacingMode;
isPlaying: boolean;
isBusy: boolean;
}>;

export declare const selectCaptureHintsState$: () => Observable<HelpStore>;

export declare const selectConsents$: () => Observable<ConsentItem[]>;

export declare const selectCredentialsFromSettings$: () => Observable<(({
    capabilities?: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
    }[] | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
} & {
    deviceRiskVendors?: string[] | undefined;
    requiredParts?: string[] | undefined;
    type: {
        values: ("JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM")[];
        predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
    };
    category: Category.Facemap;
}) | ({
    capabilities?: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
    }[] | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
} & {
    type?: {
        values: ("PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY")[];
        predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
    } | undefined;
    country?: {
        values: ("ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE")[];
        predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
    } | undefined;
    subType?: {
        values: ("DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK")[];
        predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
    } | undefined;
    deviceRiskVendors?: string[] | undefined;
    acquisitionMode?: string | undefined;
    category: Category.Id;
}) | ({
    capabilities?: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
    }[] | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
} & {
    type: {
        values: string[];
        predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
    };
    category: Category.Document;
    country: {
        values: ("ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE")[];
        predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
    };
    deviceRiskVendors: string[];
    requiredParts: string[];
}) | ({
    capabilities?: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
    }[] | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
} & {
    type?: {
        values: string[];
        predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
    } | undefined;
    category: Category.Data;
    deviceRiskVendors: string[];
    requiredParts: string[];
}))[]>;

export declare const selectCrossDeviceEnabledSettings$: () => Observable<boolean>;

export declare const selectCrossDeviceSettings$: () => Observable<MerchantSettingsCrossDevice | undefined>;

export declare const selectCurrentDevice$: () => Observable<JMediaDeviceInfo | undefined>;

export declare const selectCurrentFps$: () => Observable<number | undefined>;

export declare const selectDeviceStore$: () => Observable<DeviceStore & {
    deviceEntities: Record<string, JMediaDeviceInfo>;
    deviceIds: string[];
} & {
    mockDeviceEntities: Record<string, JMediaDeviceInfo>;
    mockDeviceIds: string[];
}>;

export declare const selectedCountry: EventDispatcher<    {
country: string | undefined;
}>;

export declare const selectedDocument: EventDispatcher<    {
document: string;
digitalIdProvider?: string;
}>;

export declare const selectEssentialWorkflowParams$: () => Observable<{
    step: VirtualStep.Setup;
    substep: undefined;
    credentialId: UUID | undefined;
    shouldStoreNavigationState: boolean;
    activeScreen: ActiveScreen;
    parsedToken?: Token<Date> | undefined;
    token: string;
    transactionId: UUID;
    tokenExpired: boolean;
    sessionUrl: string;
    baseUrl: string;
    locale: Locale;
    finalized: boolean;
    consentGivenSent: boolean;
    linked: boolean;
    acquisitionStatus: AcquisitionStatus;
    acquisitionPolling: boolean;
} | {
    step: VirtualStep.Start;
    substep: StartStep;
    credentialId: UUID | undefined;
    shouldStoreNavigationState: boolean;
    activeScreen: ActiveScreen;
    parsedToken?: Token<Date> | undefined;
    token: string;
    transactionId: UUID;
    tokenExpired: boolean;
    sessionUrl: string;
    baseUrl: string;
    locale: Locale;
    finalized: boolean;
    consentGivenSent: boolean;
    linked: boolean;
    acquisitionStatus: AcquisitionStatus;
    acquisitionPolling: boolean;
} | {
    step: import("../../../types/src/index.js").Category.Id;
    substep: IdStep;
    credentialId: UUID | undefined;
    shouldStoreNavigationState: boolean;
    activeScreen: ActiveScreen;
    parsedToken?: Token<Date> | undefined;
    token: string;
    transactionId: UUID;
    tokenExpired: boolean;
    sessionUrl: string;
    baseUrl: string;
    locale: Locale;
    finalized: boolean;
    consentGivenSent: boolean;
    linked: boolean;
    acquisitionStatus: AcquisitionStatus;
    acquisitionPolling: boolean;
} | {
    step: import("../../../types/src/index.js").Category.Facemap;
    substep: FacemapStep;
    credentialId: UUID | undefined;
    shouldStoreNavigationState: boolean;
    activeScreen: ActiveScreen;
    parsedToken?: Token<Date> | undefined;
    token: string;
    transactionId: UUID;
    tokenExpired: boolean;
    sessionUrl: string;
    baseUrl: string;
    locale: Locale;
    finalized: boolean;
    consentGivenSent: boolean;
    linked: boolean;
    acquisitionStatus: AcquisitionStatus;
    acquisitionPolling: boolean;
} | {
    step: import("../../../types/src/index.js").Category.Document;
    substep: DocumentStep;
    credentialId: UUID | undefined;
    shouldStoreNavigationState: boolean;
    activeScreen: ActiveScreen;
    parsedToken?: Token<Date> | undefined;
    token: string;
    transactionId: UUID;
    tokenExpired: boolean;
    sessionUrl: string;
    baseUrl: string;
    locale: Locale;
    finalized: boolean;
    consentGivenSent: boolean;
    linked: boolean;
    acquisitionStatus: AcquisitionStatus;
    acquisitionPolling: boolean;
} | {
    step: import("../../../types/src/index.js").Category.Data;
    substep: DataStep;
    credentialId: UUID | undefined;
    shouldStoreNavigationState: boolean;
    activeScreen: ActiveScreen;
    parsedToken?: Token<Date> | undefined;
    token: string;
    transactionId: UUID;
    tokenExpired: boolean;
    sessionUrl: string;
    baseUrl: string;
    locale: Locale;
    finalized: boolean;
    consentGivenSent: boolean;
    linked: boolean;
    acquisitionStatus: AcquisitionStatus;
    acquisitionPolling: boolean;
} | {
    step: VirtualStep.Finish;
    substep: undefined;
    credentialId: UUID | undefined;
    shouldStoreNavigationState: boolean;
    activeScreen: ActiveScreen;
    parsedToken?: Token<Date> | undefined;
    token: string;
    transactionId: UUID;
    tokenExpired: boolean;
    sessionUrl: string;
    baseUrl: string;
    locale: Locale;
    finalized: boolean;
    consentGivenSent: boolean;
    linked: boolean;
    acquisitionStatus: AcquisitionStatus;
    acquisitionPolling: boolean;
}>;

export declare const selectFaceFinderBackgroundColor$: () => Observable<string | undefined>;

export declare const selectFaceFinderCanvasSize$: () => Observable<DsDimensions | undefined>;

export declare const selectFaceFinderEllipse$: (visibleFaceFinder$?: Observable<{
    cxRatio: number;
    cyRatio: number;
    frameAspectRatio: number;
    fillRatio: number;
}>, canvasSize$?: Observable<DsDimensions | undefined>) => Observable<LivenessFaceFinderEllipse>;

export declare const selectFaceFinderOval$: () => Observable<{
    cxRatio: number;
    cyRatio: number;
    frameAspectRatio: number;
    fillRatio: number;
}>;

export declare const selectFaceFinderScanning$: () => Observable<boolean>;

export declare const selectFaceFinderState$: () => Observable<{
    scanning: boolean;
    backgroundColor: string | undefined;
    faceFinderEllipse: LivenessFaceFinderEllipse;
    videoSize: DsDimensions | undefined;
}>;

export declare const selectFileStoreEntitiesByCredentialId$: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => Observable<FileStoreEntity[]>;

export declare const selectFileStoreEntitiesWithUsabilityDecisionReject$: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => Observable<    {
thumbnail?: {
id: `${string}-${string}-${string}-${string}-${string}`;
state: "not-started";
} | {
id: `${string}-${string}-${string}-${string}-${string}`;
state: "progress";
} | {
id: `${string}-${string}-${string}-${string}-${string}`;
state: "success";
thumbnail: {
width: number;
height: number;
base64: string;
};
} | {
error: unknown;
id: `${string}-${string}-${string}-${string}-${string}`;
state: "error";
} | undefined;
upload: {
idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
docvProcessed?: boolean | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
source: "camera" | "upload";
state: "success";
classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
category: Category;
credentialId: `${string}-${string}-${string}-${string}-${string}`;
blob: Blob;
batchBytesToUpload: number;
batchBytesUploaded: number;
batchUploadProgress: number;
usabilityId: string;
};
usability: {
id: `${string}-${string}-${string}-${string}-${string}`;
state: "success";
result: {
extractedData?: {
address?: string | undefined;
country?: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE" | undefined;
idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
city?: string | undefined;
dateOfBirth?: string | undefined;
documentNumber?: string | undefined;
expiryDate?: string | undefined;
firstName?: string | undefined;
gender?: string | undefined;
idSubType?: string | undefined;
issuingCountry?: "ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE" | undefined;
issuingDate?: string | undefined;
lastName?: string | undefined;
mrzLine1?: string | undefined;
mrzLine2?: string | undefined;
mrzLine3?: string | undefined;
nationality?: string | undefined;
personalNumber?: string | undefined;
placeOfBirth?: string | undefined;
postalCode?: string | undefined;
rawBarcodeData?: string | undefined;
subdivision?: string | undefined;
} | undefined;
classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
decisionType: "REJECT";
rejectReason: {
reasonCode: "0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501";
};
};
};
}[]>;

export declare const selectFilteredRealVideoDeviceList$: () => Observable<JMediaDeviceInfo[]>;

export declare const selectFilteredVideoDeviceList$: () => Observable<JMediaDeviceInfo[]>;

export declare const selectFinalized$: () => Observable<boolean>;

export declare const selectHelpTimeoutForCredential$: (credential: Category) => Observable<number>;

export declare const selectIsCameraPlaying$: () => Observable<boolean>;

export declare const selectIsExplicitUploadEnabled$: () => Observable<boolean | undefined>;

export declare const selectIsFileUploadEnabled$: () => Observable<boolean>;

export declare const selectIsFlipped$: () => Observable<boolean>;

export declare const selectJumioSdkMessage$: () => Observable<    {
message?: string | undefined;
errorCode?: string | undefined;
overlay?: boolean | undefined;
publicErrorCode?: PublicError | undefined;
shouldPost?: boolean | undefined;
type: "error";
title: string;
id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
date: Date;
transactionId: string;
closable: boolean;
} | {
message?: string | undefined;
overlay?: boolean | undefined;
shouldPost?: boolean | undefined;
type: "success";
title: string;
id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
closable: boolean;
} | {
title?: string | undefined;
progress?: number | undefined;
message?: string | undefined;
overlay?: boolean | undefined;
shouldPost?: boolean | undefined;
type: "progress";
id: "acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent";
closable: boolean;
} | undefined>;

export declare const selectLivenessResolution$: () => Observable<({
    width: number;
    height: number;
} | {
    height: number;
    aspectRatio: number;
} | {
    width: number;
    aspectRatio: number;
} | {
    width: number;
    height: number;
    aspectRatio: number;
} | {
    aspectRatio: number;
} | {
    height: number;
} | {
    width: number;
})[]>;

export declare const selectLivenessRetries$: () => Observable<number>;

export declare const selectLookupResponse$: () => Observable<LookupResponse | undefined>;

export declare const selectPermissionState$: () => Observable<PermissionStore>;

export declare const selectRecoveringState$: () => Observable<boolean>;

export declare const selectServerTime$: () => Observable<number>;

export declare const selectSettings$: () => Observable<{
    merchantSettings?: {
        branding?: {
            primaryColor?: string | undefined;
            accentColor?: string | undefined;
            logoUri?: string | undefined;
        } | undefined;
        datadog?: {
            rules?: ({
                fieldNamePattern: string;
                valuePattern: string;
            } & {
                defaultPrivacyLevel?: "mask" | "mask-user-input" | "allow" | undefined;
                sessionSampleRate?: number | undefined;
                sessionReplaySampleRate?: number | undefined;
            })[] | undefined;
            enabled: boolean;
            merchantName: string;
        } | undefined;
        autoCapture?: {
            idEnabled?: boolean | undefined;
            docVEnabled?: boolean | undefined;
            newDesign?: boolean | undefined;
        } | undefined;
        crossDevice?: {
            link?: string | undefined;
            crossDeviceOption?: "default" | "email_only" | "qr_only" | undefined;
            enabled: boolean;
        } | undefined;
        crossDeviceOnly?: boolean | undefined;
        idFlipAnimationDuration?: number | undefined;
        integrityCheck?: boolean | undefined;
        isExplicitUploadEnabled?: boolean | undefined;
        isFileUploadEnabled?: boolean | undefined;
        jLiveEnabled?: boolean | undefined;
        jLiveIod?: number | undefined;
        rescueSessionEnabled?: boolean | undefined;
        showBackNavigationButton?: boolean | undefined;
        showLanguageSelector?: boolean | undefined;
        skipDocTypeSelectionPage?: boolean | undefined;
        skipLivenessGuidancePage?: boolean | undefined;
        jLiveFallbackPolicy: "disabled" | "soft" | "strict";
    } | undefined;
    redirects?: {
        error?: string | undefined;
        success?: string | undefined;
    } | undefined;
    skipStartScreen?: boolean | undefined;
    timestamp: string;
    configurations: {
        fileUpload?: {
            isFallbackUploadEnabled: boolean;
        } | undefined;
        jumioLiveness?: {
            resolution?: {
                width: number;
                height: number;
            } | {
                height: number;
                aspectRatio: number;
            } | {
                width: number;
                aspectRatio: number;
            } | {
                width: number;
                height: number;
                aspectRatio: number;
            } | {
                aspectRatio: number;
            } | {
                height: number;
            } | {
                width: number;
            } | ({
                width: number;
                height: number;
            } | {
                height: number;
                aspectRatio: number;
            } | {
                width: number;
                aspectRatio: number;
            } | {
                width: number;
                height: number;
                aspectRatio: number;
            } | {
                aspectRatio: number;
            } | {
                height: number;
            } | {
                width: number;
            })[] | undefined;
            fallbackTimeInMs: number;
            farImages: number;
            frameRateThreshold: number;
            imageCompression: number;
            imageResolutionHeight: number;
            imageResolutionWidth: number;
            initialImages: number;
            maxConsecutiveImageTimespanInMs: number;
            maxFaceCenterDifference: number;
            maximumPseudoPitch: number;
            maximumPseudoYaw: number;
            minNearFarRatio: number;
            minTimePerDistanceInMs: number;
            minimumPseudoPitch: number;
            minimumPseudoYaw: number;
            modelInitTimeoutInMs: number;
            nearImages: number;
            retries: number;
            samplingTimeInMs: number;
            tooFarThreshold: number;
            tooNearThreshold: number;
            transitionImages: number;
            userFallbackAllowed: boolean;
            violationLimit: number;
        } | undefined;
        idAutocapture?: {
            fallbackTimeInMs?: number | undefined;
            assetsLoadingTimeoutMs?: number | undefined;
            excludeDevices?: string[] | undefined;
            focusTimeInMs?: number | undefined;
            manualFocusTimeInMs?: number | undefined;
            displayRescueCaptureButtonInMs?: number | undefined;
            optimisticFeedbackThreshold?: number | undefined;
            trackerBackdropVisible?: boolean | undefined;
            showUnifiedPhysicalIdType?: boolean | undefined;
        } | undefined;
        helpScreen?: {
            ID: number;
            FACEMAP: number;
            DOCUMENT: number;
            DATA: number;
        } | undefined;
        sensorData?: {
            intervalLog: number;
            intervalSend: number;
        } | undefined;
        supplementalImagesV2?: {
            images: ({
                classifier: "ID_SEQUENCE" | "SELFIE_SEQUENCE";
                captureFrequency: number;
                maxBatch: number;
                maxQueueSizeBytes: number;
                minBufferAge: number;
                resolutions: number[];
            } | {
                classifier: "FRONT_WITH_FLASH";
                flash: boolean;
                usabilityExpected: boolean;
            })[];
        }[] | undefined;
        uploadWebpForIdCapture?: string | undefined;
        datadog?: {
            rules?: ({
                fieldNamePattern: string;
                valuePattern: string;
            } & {
                defaultPrivacyLevel?: "mask" | "mask-user-input" | "allow" | undefined;
                sessionSampleRate?: number | undefined;
                sessionReplaySampleRate?: number | undefined;
            })[] | undefined;
        } | undefined;
        idSharpness?: {
            logSharpnessThreshold: number;
            evaluationThrottleTimeMs: number;
            sharpnessFallbackTimeoutMs: number;
            minSharpnessSequenceDurationMs: number;
            queueSize: number;
        } | undefined;
    };
    accountId: `${string}-${string}-${string}-${string}-${string}`;
    acquisitionReference: `${string}-${string}-${string}-${string}-${string}`;
    brandingEnabled: boolean;
    consents: {
        privacyPolicyUrl?: string | undefined;
        localizedPrivacyPolicyUrls?: {
            id?: string | undefined;
            hr?: string | undefined;
            th?: string | undefined;
            tr?: string | undefined;
            ms?: string | undefined;
            el?: string | undefined;
            ar?: string | undefined;
            az?: string | undefined;
            bg?: string | undefined;
            bn?: string | undefined;
            bn_IN?: string | undefined;
            "bn-IN"?: string | undefined;
            ca?: string | undefined;
            ceb?: string | undefined;
            ceb_PH?: string | undefined;
            "ceb-PH"?: string | undefined;
            cs?: string | undefined;
            da?: string | undefined;
            de?: string | undefined;
            en?: string | undefined;
            en_GB?: string | undefined;
            "en-GB"?: string | undefined;
            en_US?: string | undefined;
            "en-US"?: string | undefined;
            es?: string | undefined;
            es_MX?: string | undefined;
            "es-MX"?: string | undefined;
            et?: string | undefined;
            fi?: string | undefined;
            fil?: string | undefined;
            fil_PH?: string | undefined;
            "fil-PH"?: string | undefined;
            fr?: string | undefined;
            fr_CA?: string | undefined;
            "fr-CA"?: string | undefined;
            ga?: string | undefined;
            he?: string | undefined;
            hi?: string | undefined;
            hi_IN?: string | undefined;
            "hi-IN"?: string | undefined;
            hu?: string | undefined;
            hy?: string | undefined;
            it?: string | undefined;
            is?: string | undefined;
            ja?: string | undefined;
            jv?: string | undefined;
            jv_ID?: string | undefined;
            "jv-ID"?: string | undefined;
            ka_GE?: string | undefined;
            "ka-GE"?: string | undefined;
            kk?: string | undefined;
            km?: string | undefined;
            km_KH?: string | undefined;
            "km-KH"?: string | undefined;
            ko?: string | undefined;
            lt?: string | undefined;
            lv?: string | undefined;
            my?: string | undefined;
            my_MM?: string | undefined;
            "my-MM"?: string | undefined;
            nl?: string | undefined;
            no?: string | undefined;
            pl?: string | undefined;
            pt?: string | undefined;
            pt_BR?: string | undefined;
            "pt-BR"?: string | undefined;
            ro?: string | undefined;
            ru?: string | undefined;
            sk?: string | undefined;
            sr_Cyrl?: string | undefined;
            "sr-Cyrl"?: string | undefined;
            sr?: string | undefined;
            sr_Latn?: string | undefined;
            "sr-Latn"?: string | undefined;
            sl?: string | undefined;
            sv?: string | undefined;
            sq?: string | undefined;
            sw?: string | undefined;
            uk?: string | undefined;
            ur?: string | undefined;
            uz?: string | undefined;
            vi?: string | undefined;
            zh?: string | undefined;
            zh_CN?: string | undefined;
            "zh-CN"?: string | undefined;
            zh_HK?: string | undefined;
            "zh-HK"?: string | undefined;
        } | undefined;
        additionalData?: {
            termsOfUseText: {
                id?: string | undefined;
                hr?: string | undefined;
                th?: string | undefined;
                tr?: string | undefined;
                ms?: string | undefined;
                el?: string | undefined;
                ar?: string | undefined;
                az?: string | undefined;
                bg?: string | undefined;
                bn?: string | undefined;
                bn_IN?: string | undefined;
                "bn-IN"?: string | undefined;
                ca?: string | undefined;
                ceb?: string | undefined;
                ceb_PH?: string | undefined;
                "ceb-PH"?: string | undefined;
                cs?: string | undefined;
                da?: string | undefined;
                de?: string | undefined;
                en?: string | undefined;
                en_GB?: string | undefined;
                "en-GB"?: string | undefined;
                en_US?: string | undefined;
                "en-US"?: string | undefined;
                es?: string | undefined;
                es_MX?: string | undefined;
                "es-MX"?: string | undefined;
                et?: string | undefined;
                fi?: string | undefined;
                fil?: string | undefined;
                fil_PH?: string | undefined;
                "fil-PH"?: string | undefined;
                fr?: string | undefined;
                fr_CA?: string | undefined;
                "fr-CA"?: string | undefined;
                ga?: string | undefined;
                he?: string | undefined;
                hi?: string | undefined;
                hi_IN?: string | undefined;
                "hi-IN"?: string | undefined;
                hu?: string | undefined;
                hy?: string | undefined;
                it?: string | undefined;
                is?: string | undefined;
                ja?: string | undefined;
                jv?: string | undefined;
                jv_ID?: string | undefined;
                "jv-ID"?: string | undefined;
                ka_GE?: string | undefined;
                "ka-GE"?: string | undefined;
                kk?: string | undefined;
                km?: string | undefined;
                km_KH?: string | undefined;
                "km-KH"?: string | undefined;
                ko?: string | undefined;
                lt?: string | undefined;
                lv?: string | undefined;
                my?: string | undefined;
                my_MM?: string | undefined;
                "my-MM"?: string | undefined;
                nl?: string | undefined;
                no?: string | undefined;
                pl?: string | undefined;
                pt?: string | undefined;
                pt_BR?: string | undefined;
                "pt-BR"?: string | undefined;
                ro?: string | undefined;
                ru?: string | undefined;
                sk?: string | undefined;
                sr_Cyrl?: string | undefined;
                "sr-Cyrl"?: string | undefined;
                sr?: string | undefined;
                sr_Latn?: string | undefined;
                "sr-Latn"?: string | undefined;
                sl?: string | undefined;
                sv?: string | undefined;
                sq?: string | undefined;
                sw?: string | undefined;
                uk?: string | undefined;
                ur?: string | undefined;
                uz?: string | undefined;
                vi?: string | undefined;
                zh?: string | undefined;
                zh_CN?: string | undefined;
                "zh-CN"?: string | undefined;
                zh_HK?: string | undefined;
                "zh-HK"?: string | undefined;
            };
            termsOfUseUrl: string;
            selfieDonePolicyText: {
                id?: string | undefined;
                hr?: string | undefined;
                th?: string | undefined;
                tr?: string | undefined;
                ms?: string | undefined;
                el?: string | undefined;
                ar?: string | undefined;
                az?: string | undefined;
                bg?: string | undefined;
                bn?: string | undefined;
                bn_IN?: string | undefined;
                "bn-IN"?: string | undefined;
                ca?: string | undefined;
                ceb?: string | undefined;
                ceb_PH?: string | undefined;
                "ceb-PH"?: string | undefined;
                cs?: string | undefined;
                da?: string | undefined;
                de?: string | undefined;
                en?: string | undefined;
                en_GB?: string | undefined;
                "en-GB"?: string | undefined;
                en_US?: string | undefined;
                "en-US"?: string | undefined;
                es?: string | undefined;
                es_MX?: string | undefined;
                "es-MX"?: string | undefined;
                et?: string | undefined;
                fi?: string | undefined;
                fil?: string | undefined;
                fil_PH?: string | undefined;
                "fil-PH"?: string | undefined;
                fr?: string | undefined;
                fr_CA?: string | undefined;
                "fr-CA"?: string | undefined;
                ga?: string | undefined;
                he?: string | undefined;
                hi?: string | undefined;
                hi_IN?: string | undefined;
                "hi-IN"?: string | undefined;
                hu?: string | undefined;
                hy?: string | undefined;
                it?: string | undefined;
                is?: string | undefined;
                ja?: string | undefined;
                jv?: string | undefined;
                jv_ID?: string | undefined;
                "jv-ID"?: string | undefined;
                ka_GE?: string | undefined;
                "ka-GE"?: string | undefined;
                kk?: string | undefined;
                km?: string | undefined;
                km_KH?: string | undefined;
                "km-KH"?: string | undefined;
                ko?: string | undefined;
                lt?: string | undefined;
                lv?: string | undefined;
                my?: string | undefined;
                my_MM?: string | undefined;
                "my-MM"?: string | undefined;
                nl?: string | undefined;
                no?: string | undefined;
                pl?: string | undefined;
                pt?: string | undefined;
                pt_BR?: string | undefined;
                "pt-BR"?: string | undefined;
                ro?: string | undefined;
                ru?: string | undefined;
                sk?: string | undefined;
                sr_Cyrl?: string | undefined;
                "sr-Cyrl"?: string | undefined;
                sr?: string | undefined;
                sr_Latn?: string | undefined;
                "sr-Latn"?: string | undefined;
                sl?: string | undefined;
                sv?: string | undefined;
                sq?: string | undefined;
                sw?: string | undefined;
                uk?: string | undefined;
                ur?: string | undefined;
                uz?: string | undefined;
                vi?: string | undefined;
                zh?: string | undefined;
                zh_CN?: string | undefined;
                "zh-CN"?: string | undefined;
                zh_HK?: string | undefined;
                "zh-HK"?: string | undefined;
            };
        } | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
        text: string;
        displayType: "PASSIVE" | "ACTIVE";
        alternativeTexts: {
            id?: string | undefined;
            hr?: string | undefined;
            th?: string | undefined;
            tr?: string | undefined;
            ms?: string | undefined;
            el?: string | undefined;
            ar?: string | undefined;
            az?: string | undefined;
            bg?: string | undefined;
            bn?: string | undefined;
            bn_IN?: string | undefined;
            "bn-IN"?: string | undefined;
            ca?: string | undefined;
            ceb?: string | undefined;
            ceb_PH?: string | undefined;
            "ceb-PH"?: string | undefined;
            cs?: string | undefined;
            da?: string | undefined;
            de?: string | undefined;
            en?: string | undefined;
            en_GB?: string | undefined;
            "en-GB"?: string | undefined;
            en_US?: string | undefined;
            "en-US"?: string | undefined;
            es?: string | undefined;
            es_MX?: string | undefined;
            "es-MX"?: string | undefined;
            et?: string | undefined;
            fi?: string | undefined;
            fil?: string | undefined;
            fil_PH?: string | undefined;
            "fil-PH"?: string | undefined;
            fr?: string | undefined;
            fr_CA?: string | undefined;
            "fr-CA"?: string | undefined;
            ga?: string | undefined;
            he?: string | undefined;
            hi?: string | undefined;
            hi_IN?: string | undefined;
            "hi-IN"?: string | undefined;
            hu?: string | undefined;
            hy?: string | undefined;
            it?: string | undefined;
            is?: string | undefined;
            ja?: string | undefined;
            jv?: string | undefined;
            jv_ID?: string | undefined;
            "jv-ID"?: string | undefined;
            ka_GE?: string | undefined;
            "ka-GE"?: string | undefined;
            kk?: string | undefined;
            km?: string | undefined;
            km_KH?: string | undefined;
            "km-KH"?: string | undefined;
            ko?: string | undefined;
            lt?: string | undefined;
            lv?: string | undefined;
            my?: string | undefined;
            my_MM?: string | undefined;
            "my-MM"?: string | undefined;
            nl?: string | undefined;
            no?: string | undefined;
            pl?: string | undefined;
            pt?: string | undefined;
            pt_BR?: string | undefined;
            "pt-BR"?: string | undefined;
            ro?: string | undefined;
            ru?: string | undefined;
            sk?: string | undefined;
            sr_Cyrl?: string | undefined;
            "sr-Cyrl"?: string | undefined;
            sr?: string | undefined;
            sr_Latn?: string | undefined;
            "sr-Latn"?: string | undefined;
            sl?: string | undefined;
            sv?: string | undefined;
            sq?: string | undefined;
            sw?: string | undefined;
            uk?: string | undefined;
            ur?: string | undefined;
            uz?: string | undefined;
            vi?: string | undefined;
            zh?: string | undefined;
            zh_CN?: string | undefined;
            "zh-CN"?: string | undefined;
            zh_HK?: string | undefined;
            "zh-HK"?: string | undefined;
        };
    }[];
    countryForIp: string;
    credentials: (({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        deviceRiskVendors?: string[] | undefined;
        requiredParts?: string[] | undefined;
        type: {
            values: ("JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        category: Category.Facemap;
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type?: {
            values: ("PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        country?: {
            values: ("ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        subType?: {
            values: ("DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        deviceRiskVendors?: string[] | undefined;
        acquisitionMode?: string | undefined;
        category: Category.Id;
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type: {
            values: string[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        category: Category.Document;
        country: {
            values: ("ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE")[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        };
        deviceRiskVendors: string[];
        requiredParts: string[];
    }) | ({
        capabilities?: {
            id: `${string}-${string}-${string}-${string}-${string}`;
            name: string;
        }[] | undefined;
        id: `${string}-${string}-${string}-${string}-${string}`;
    } & {
        type?: {
            values: string[];
            predefinedType: "DEFINED" | "RECOMMENDED" | "OPTIONAL";
        } | undefined;
        category: Category.Data;
        deviceRiskVendors: string[];
        requiredParts: string[];
    }))[];
    maxFileUploadSize: number;
    stateForIp: string;
    supportedDocumentTypes: {
        translations?: {
            [x: string]: string;
        } | undefined;
        code: string;
        name: string;
        maxPages: number;
    }[];
    workflowDefinitionKey: number;
}>;

export declare const selectSetupWorkflowParams$: () => Observable<{
    token: string;
    baseUrl: string;
    transactionId: `${string}-${string}-${string}-${string}-${string}`;
    locale: "id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK";
}>;

export declare const selectToken$: () => Observable<TokenState<Date>>;

export declare type SelectType = Static<typeof TbSelectTypeSchema>;

export declare const SelectTypeEnum: {
    readonly Default: "default";
    readonly CaptureScreen: "capture-screen";
};

export declare const selectUiState$: () => Observable<UIState>;

export declare const selectUnfilteredMockVideoDeviceList$: () => Observable<JMediaDeviceInfo[]>;

export declare const selectUnfilteredRealVideoDeviceList$: () => Observable<JMediaDeviceInfo[]>;

export declare const selectUploadedPdfFile$: (credentialId?: `${string}-${string}-${string}-${string}-${string}`) => Observable<Blob | undefined>;

export declare const selectVideoResolution$: () => Observable<Resolution>;

export declare const selectVideoSize$: () => Observable<DsDimensions | undefined>;

export declare const selectWebpSupported$: () => Observable<boolean>;

export declare const selectWorkflowState$: () => Observable<WorkflowState>;

export declare const selectWorkflowStep$: () => Observable<Category | VirtualStep>;

export declare const selectWorkflowStepInformation$: () => Observable<NavigationStepVirtualStepSetup | NavigationStepVirtualStepStart | NavigationStepCategoryId | NavigationStepCategoryFacemap | NavigationStepCategoryDocument | NavigationStepCategoryData | NavigationStepVirtualStepFinish>;

export declare const selectWorkflowSubstep$: () => Observable<StartStep | IdStep | FacemapStep | DocumentStep | DataStep | undefined>;

export declare const selectWrongSettings$: () => Observable<WrongSettings | undefined>;

export declare interface SendEventRequest {
    events: EventBody[];
}

export declare type SensorCaptureIntervals = Static<typeof TbSensorCaptureIntervalsSchema>;

export declare interface SensorData extends EventMetadata {
    screen?: string;
    credentialId?: string;
    timestamp?: Date;
    samplingIntervalMs?: number;
    accelerometer: {
        x: number;
        y: number;
        z: number;
    }[];
    gyroscope: {
        alpha: number;
        beta: number;
        gamma: number;
    }[];
    message?: string;
}

export declare const sensorData: EventDispatcher<SensorData>;

export declare type SequenceImageClassifier = Static<typeof TbSequenceImageClassifierSchema>;

export declare const serializeDeviceList: (devices: MediaDeviceInfo[]) => string;

export declare const serializeUrl: <T extends NavigationStep>(navigationStep: T) => string | undefined;

export declare class SessionUrlBoxComponent extends BaseComponent {
    static styles: CSSResult[];
    url: string;
    render(): TemplateResult<1>;
    copyToClipboard(): Promise<void>;
}

export declare const setAcceptableConsents: (consents: AcceptableConsentItem[]) => void;

export declare const setActiveDeviceById: (deviceId: DeviceStore["deviceId"]) => void;

export declare const setAutocaptureState: (state: AutocaptureState, fallbackReason?: ManualCaptureFallbackReason) => void;

export declare const setCameraFilterFn: (filterFn: CameraFilterFn | undefined) => void;

export declare const setCameraPermissionState: (permissionState: PermissionState) => void;

export declare const setCameraState: (newState: Partial<CameraStoreState>) => void;

export declare const setCaptureHintsState: (params?: Partial<HelpStore>) => void;

export declare const setConsentGivenSend: () => void;

export declare const setConsentSettingsFetched: (settingsFetched: boolean) => void;

export declare const setCustomOvalConfigurations: (config: Record<LivenessFaceFinderDistance, LivenessFaceFinder> | undefined) => void;

export declare const setDeviceList: (devices: JMediaDeviceInfo[]) => void;

export declare const setDocClassifierCaptured: (value: AutocaptureDocClassifierExtendedData | undefined) => void;

export declare const setFaceFinderBackgroundColor: (color: string | undefined) => void;

export declare const setFaceFinderCanvasSize: (canvasSize: DsDimensions) => void;

export declare const setFaceFinderDistance: (distance: LivenessFaceFinderDistance) => void;

export declare const setFaceFinderScanning: (scanning: boolean) => void;

export declare const setFaceFinderVideoSize: (videoSize: DsDimensions) => void;

export declare const setJumioSdkMessage: (message: JumioSdkMessage | undefined) => void;

export declare const setLocationHref: (url: string) => void;

export declare const setMockedUrl: (...urls: string[]) => void;

export declare const setPermissionQueryMock: (handler: PermissionQuery) => void;

export declare const setRecoveringState: (value: boolean) => void;

export declare const setRescueCaptureState: (activated: boolean) => void;

export declare const setSettings: (settings: Partial<SettingsRaw>) => void;

export declare const setSettingsRelativeRequestTime: (value: number) => void;

export declare const setSupportedCountryEidasTransformer: (fn: SupportedCountryTransformer) => void;

export declare const setSupportedCountryPredefinitionTransformer: (fn: SupportedCountryTransformer) => void;

export declare type Settings = Omit<SettingsRaw, 'supportedCountries'>;

export declare const settings: EventDispatcher<    {
credentials: unknown;
}>;

export declare type SettingsRaw = Static<typeof TbSettingsSchema>;

export declare interface SettingsRequest extends Record<string, unknown> {
    linkedModules: LinkedModule[];
    deviceDetails: DeviceDetails;
}

export declare type SettingsWithoutConfigurations = Static<typeof TbSettingsWithoutConfigurationsSchema>;

export declare const setupTemplateSettings: () => void;

export declare type SetWorkflowStep = (params: NavigationStep) => void;

export declare const setWorkflowStep: SetWorkflowStep;

export declare const setWrongSettings$: (data: WrongSettings) => void;

export declare class SFSafariViewControllerCameraError extends DOMException {
    constructor(message?: string);
}

export declare const SFSafariViewControllerCameraErrorName = "SFSafariViewControllerCameraError";

export declare class SheetComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult_2<1>;
}

export declare class ShieldListComponent extends BaseComponent {
    static styles: CSSResult[];
    items: ShieldListItemComponent[];
    render(): TemplateResult_2<1>;
}

export declare class ShieldListItemComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult_2<1>;
}

export declare class ShimmerLoader extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult<1>;
}

export declare const shouldShowBackNavigationButton$: () => Observable<boolean>;

export declare const shouldShowBackNavigationButton: () => boolean;

export declare const shouldShowLocaleSelector$: () => Observable<boolean>;

export declare const shouldShowLocaleSelector: () => boolean;

export declare const shownCameraAccessRequestScreen: EventDispatcher<    {
kind: "denied" | "prompt";
devices: MediaDeviceMetadata[];
}>;

export declare const shownCameraCaptureHints: EventDispatcher<    {
visible: boolean;
}>;

export declare const shownConsentMessage: EventDispatcher<EventMetadata>;

export declare const shownCrossDeviceFinishScreen: EventDispatcher<    {
acquisitionStatus: AcquisitionStatus;
error?: PublicError;
}>;

export declare const shownCrossDeviceScreen: EventDispatcher<EventMetadata>;

export declare const shownError: EventDispatcher<EventMetadata>;

export declare const shownFinishScreen: EventDispatcher<    {
outcome: RequestOutcome<FinalizeResponse | undefined, unknown>;
}>;

export declare const shownIdLookupScreen: EventDispatcher<    {
outcome: RequestOutcome<LookupResponse | undefined, unknown>;
matchFound?: boolean;
lookupDuration?: number;
}>;

export declare const sortAlphabeticallyByKey: <K extends string, T extends Record<K, string>>(items: T[], key: K, ascending?: boolean) => T[];

export declare type Source = Static<typeof TbSourceSchema>;

export declare const SourceEnum: {
    readonly Camera: "camera";
    readonly Upload: "upload";
    readonly Preview: "preview";
};

export declare enum StartStep {
    Start = "start-screen-start",
    ConsentScreen = "start-screen-consent",
    Finish = "start-screen-finish"
}

export declare interface StateMachineCredentialIdLike {
    credentialId: UUID;
}

export declare interface StateMachineSnapshotValue {
    step: Record<UUID, string> | string;
    activeScreen: ActiveScreen;
}

export declare interface StepCallback {
    target: string;
    actions?: ReturnType<typeof generateAction>;
}

export declare type StepChangeCallback = <T extends CredentialStep>(params: StepChangeParams<T>) => void;

export declare interface StepChangeParams<T extends CredentialStep = CredentialStep> {
    controller: WorkflowStepControllerMap[T];
}

export declare type StepNavigationAction = Static<typeof TbStepNavigationActionSchema>;

export declare const StepNavigationActionEnum: {
    readonly PreviousStep: "step-navigation-previous-step";
    readonly NextStep: "step-navigation-next-step";
};

export declare type StopAnimation = () => void;

export declare interface StopStreamParams {
    playbackCancelNotifier$: Subject<void>;
    resetBusyState: boolean;
    unsetVideoSource: () => void;
    videoElement?: HTMLVideoElement;
    videoSource?: MediaStream | string;
}

export declare const STORE_TOKENS: {
    CredentialIdStoreFactory: ServiceIdentifier<(credentialId: UUID) => CredentialIdStore>;
    CredentialFacemapStoreFactory: ServiceIdentifier<(credentialId: UUID) => CredentialFacemapStore>;
};

export declare interface StoreForIdCredential extends TrustCheckStoreState, EidasStoreState {
    selectedCountry?: CountryCode;
    selectedIdType?: IdType;
    selectedIdSubtype?: DigitalIdentitySubtypeType;
    selectedDigitalIdProvider?: string;
    selectedFileSource?: FileSource;
}

export declare const storeInversifyContainer: Container;

export declare const storeLookupResponse: (response: LookupResponse) => void;

export declare const stylesGeneric: CSSResult;

/**
 * Provides a reusable sticky footer pattern that anchors content (typically buttons)
 * to the bottom of the viewport.
 *
 * ## How it works
 *
 * - `margin-top: auto` - In a flex/grid context, pushes the footer to the end of the main axis
 * - `position: sticky; bottom: 0` - Makes it stick to the bottom during scroll
 * - negative margin + positive padding are self-cancelled, but hides any box-shadows oozing from overflowing elements
 * - Theme-aware backgrounds - Prevents content showing through when scrolling
 */
export declare const stylesStickyFooter: CSSResult;

export declare const stylesTextStyles: CSSResult;

export declare const stylesVariables: CSSResult;

export declare class SuccessMarkComponent extends BaseComponent {
    render(): TemplateResult<2>;
}

export declare class SuccessMessageComponent extends BaseComponent {
    static styles: CSSResult[];
    title: string;
    message: string;
    overlay: boolean;
    buttonElements: HTMLElement[];
    render(): TemplateResult_2<1>;
}

export declare type SupplementalImageClassifier = Static<typeof TbSupplementalImageClassifierSchema>;

export declare const SupplementalImageClassifierEnum: {
    readonly IdSequence: "ID_SEQUENCE";
    readonly SelfieSequence: "SELFIE_SEQUENCE";
    readonly FrontWithFlash: "FRONT_WITH_FLASH";
};

export declare interface SupplementalImageClassifierMap {
    [SupplementalImageClassifierEnum.FrontWithFlash]: ConfigurationSupplementalImageWithFlash;
    [SupplementalImageClassifierEnum.IdSequence]: ConfigurationSupplementalImageSequence;
    [SupplementalImageClassifierEnum.SelfieSequence]: ConfigurationSupplementalImageSequence;
}

export declare type SupplementalImageUpdateNotifier = () => void;

export declare type SupplementalImageUploadTypePrefix = SupplementalImageUploadTypePrefixId | SupplementalImageUploadTypePrefixSelfie;

export declare type SupplementalImageUploadTypePrefixId = `ID_SEQUENCE_${PhysicalDocumentSideClassifier}_`;

export declare type SupplementalImageUploadTypePrefixSelfie = `LIVENESS_SERIES_`;

export declare type SupportedCountry = Static<typeof TbSupportedCountrySchema>;

export declare const supportedCountryAuxTransformer: SupportedCountryTransformer;

export declare const supportedCountryTransformer$: Observable<SupportedCountryTransformer>;

export declare type SupportedCountryTransformer = (supportedCountry: SupportedCountry) => SupportedCountry;

export declare type SupportedDocumentType = Static<typeof TbSupportedDocumentTypeSchema>;

export declare class SwitchCameraCommand extends CustomEvent<JMediaDeviceInfo> {
    constructor(detail: JMediaDeviceInfo);
}

export declare const SwitchCameraCommandType = "switchcamera";

export declare class SwitchStreamCommand extends CustomEvent<SwitchStreamCommandParams> {
    constructor(detail: SwitchStreamCommandParams);
}

export declare interface SwitchStreamCommandParams {
    constraints: DeviceIdConstraint | FacingModeConstraint;
}

export declare const SwitchStreamCommandType = "switchstream";

export declare type TagName = 'cameraEverPlayed' | 'classifier' | 'country' | 'credentials' | 'customerId' | 'customerName' | 'customerReference' | 'device' | 'deviceNames' | 'displayMode' | 'document' | 'error' | 'hasDataCredential' | 'hasDocumentCredential' | 'hasFacemapCredential' | 'hasIdCredential' | 'hostname' | 'hostnameRuntime' | 'hostnameRuntimeOs' | 'hostnameRuntimeOsVersion' | 'hostnameRuntimeWorkflow' | 'hostnameRuntimeWorkflowOs' | 'hostnameWorkflow' | 'hostnameWorkflowOs' | 'idAutocaptureFallbackReason' | 'idAutocaptureFps' | 'idAutocaptureState' | 'iframe' | 'jLiveDuration' | 'jliveFramesCaptured' | 'jliveProgressCurrentStep' | 'jliveProgressStepsTotal' | 'jumioHosted' | 'lastScreen' | 'linked' | 'locale' | 'reusableIdentity' | 'runtime' | 'runtimeWorkflow' | 'scanReference' | 'screen' | 'supplementalImageFpsFacemap' | 'supplementalImageFpsId' | 'templates' | 'variant' | 'webview' | 'workflow';

export declare type Tags<N extends TagName = TagName> = Partial<Record<N, unknown>>;

export declare const TbAcceptableConsentItemSchema: TObject<    {
id: TString;
item: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
privacyPolicyUrl: TOptional<TString>;
localizedPrivacyPolicyUrls: TOptional<TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>>;
displayType: TUnion<TLiteral<"PASSIVE" | "ACTIVE">[]>;
text: TString;
alternativeTexts: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
additionalData: TOptional<TObject<    {
termsOfUseText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
termsOfUseUrl: TString;
selfieDonePolicyText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
}>>;
}>;
given: TBoolean;
timestamp: TOptional<TNumber>;
}>;

export declare const TbAcquisitionStatusSchema: TUnion<TLiteral<"FAILED" | "NOT_STARTED" | "PENDING" | "RETRY" | "SUCCESS">[]>;

export declare const TbActiveScreenActionsSchema: TUnion<TLiteral<"active-screen-navigate-to-workflow" | "active-screen-navigate-to-cross-device">[]>;

export declare const TbActiveScreenSchema: TUnion<TLiteral<"workflow" | "cross-device">[]>;

export declare const TbAdditionalDataSchema: TObject<    {
termsOfUseText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
termsOfUseUrl: TString;
selfieDonePolicyText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
}>;

export declare const TbAppContainerLayoutCaptureScreenVariantSchema: TUnion<TLiteral<"small" | "large">[]>;

export declare const TbAppContainerLayoutTypeSchema: TUnion<TLiteral<"generic" | "capture-screen">[]>;

export declare const TbAutocaptureDocClassifierDataSchema: TObject<    {
docClassifierClass: TOptional<TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>>;
docClassifierIdType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA">[]>>;
docClassifierCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>;

export declare const TbAutocaptureDocClassifierIdTypeCountrySchema: TObject<    {
docClassifierClass: TOptional<TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>>;
docClassifierIdType: TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA">[]>;
docClassifierCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
}>;

export declare const TbAutocaptureStateSchema: TUnion<TLiteral<"loading" | "active" | "manual-capture-fallback" | "not-loaded">[]>;

export declare const TbAutocaptureStateTypeSchema: TUnion<TLiteral<"doc-finder">[]>;

export declare const TbButtonShapeSchema: TUnion<TLiteral<"default" | "round">[]>;

export declare const TbButtonSizeSchema: TUnion<TLiteral<"small" | "medium" | "large" | "extra-large">[]>;

export declare const TbButtonTypeSchema: TUnion<TLiteral<"primary" | "secondary" | "tertiary" | "quiet" | "quiet-icon" | "destructive">[]>;

export declare const TbCameraFacingModeSchema: TUnion<TLiteral<"front" | "back" | "not-available">[]>;

export declare const TbCameraSelectorOrientationSchema: TUnion<TLiteral<"vertical" | "horizontal">[]>;

export declare const TbCanvasFitModeSchema: TUnion<TLiteral<"contain" | "cover">[]>;

export declare const TbCapabilitySchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>;

export declare const TbCaptureLabelSizeSchema: TUnion<TLiteral<"medium" | "large">[]>;

export declare const TbCardSizeSchema: TUnion<TLiteral<"small" | "medium" | "large">[]>;

export declare const TbCardTypeSchema: TUnion<TLiteral<"primary" | "secondary" | "tertiary">[]>;

export declare const TbCategorySchema: TUnion<TLiteral<Category>[]>;

export declare const TbClassifierSchema: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;

export declare const TbColorSchemeSchema: TUnion<TLiteral<"light" | "dark" | "auto">[]>;

export declare const TbConfigurationAutocaptureSettingsSchema: TObject<    {
assetsLoadingTimeoutMs: TOptional<TNumber>;
fallbackTimeInMs: TOptional<TNumber>;
excludeDevices: TOptional<TArray<TString>>;
focusTimeInMs: TOptional<TNumber>;
manualFocusTimeInMs: TOptional<TNumber>;
displayRescueCaptureButtonInMs: TOptional<TNumber>;
optimisticFeedbackThreshold: TOptional<TNumber>;
trackerBackdropVisible: TOptional<TBoolean>;
showUnifiedPhysicalIdType: TOptional<TBoolean>;
}>;

export declare const TbConfigurationDatadogSchema: TObject<    {
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>;

export declare const TbConfigurationFileUploadSchema: TObject<    {
isFallbackUploadEnabled: TBoolean;
}>;

export declare const TbConfigurationHelpScreenSchema: TObject<    {
ID: TNumber;
FACEMAP: TNumber;
DOCUMENT: TNumber;
DATA: TNumber;
}>;

export declare const TbConfigurationIdSharpnessSchema: TObject<    {
logSharpnessThreshold: TNumber;
evaluationThrottleTimeMs: TNumber;
sharpnessFallbackTimeoutMs: TNumber;
minSharpnessSequenceDurationMs: TNumber;
queueSize: TNumber;
}>;

export declare const TbConfigurationsLikeSchema: TObject<    {
configurations: TObject<    {
fileUpload: TOptional<TObject<    {
isFallbackUploadEnabled: TBoolean;
}>>;
jumioLiveness: TOptional<TObject<    {
fallbackTimeInMs: TNumber;
farImages: TNumber;
frameRateThreshold: TNumber;
imageCompression: TNumber;
imageResolutionHeight: TNumber;
imageResolutionWidth: TNumber;
initialImages: TNumber;
maxConsecutiveImageTimespanInMs: TNumber;
maxFaceCenterDifference: TNumber;
maximumPseudoPitch: TNumber;
maximumPseudoYaw: TNumber;
minNearFarRatio: TNumber;
minTimePerDistanceInMs: TNumber;
minimumPseudoPitch: TNumber;
minimumPseudoYaw: TNumber;
modelInitTimeoutInMs: TNumber;
nearImages: TNumber;
retries: TNumber;
samplingTimeInMs: TNumber;
tooFarThreshold: TNumber;
tooNearThreshold: TNumber;
transitionImages: TNumber;
userFallbackAllowed: TBoolean;
violationLimit: TNumber;
resolution: TOptional<TUnion<[TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>, TArray<TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>>]>>;
}>>;
idAutocapture: TOptional<TObject<    {
assetsLoadingTimeoutMs: TOptional<TNumber>;
fallbackTimeInMs: TOptional<TNumber>;
excludeDevices: TOptional<TArray<TString>>;
focusTimeInMs: TOptional<TNumber>;
manualFocusTimeInMs: TOptional<TNumber>;
displayRescueCaptureButtonInMs: TOptional<TNumber>;
optimisticFeedbackThreshold: TOptional<TNumber>;
trackerBackdropVisible: TOptional<TBoolean>;
showUnifiedPhysicalIdType: TOptional<TBoolean>;
}>>;
helpScreen: TOptional<TObject<    {
ID: TNumber;
FACEMAP: TNumber;
DOCUMENT: TNumber;
DATA: TNumber;
}>>;
sensorData: TOptional<TObject<    {
intervalLog: TNumber;
intervalSend: TNumber;
}>>;
supplementalImagesV2: TOptional<TArray<TObject<    {
images: TArray<TUnion<[TObject<    {
classifier: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;
captureFrequency: TNumber;
maxBatch: TNumber;
maxQueueSizeBytes: TNumber;
minBufferAge: TNumber;
resolutions: TArray<TNumber>;
}>, TObject<    {
classifier: TLiteral<"FRONT_WITH_FLASH">;
flash: TBoolean;
usabilityExpected: TBoolean;
}>]>>;
}>>>;
uploadWebpForIdCapture: TOptional<TString>;
datadog: TOptional<TObject<    {
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>>;
idSharpness: TOptional<TObject<    {
logSharpnessThreshold: TNumber;
evaluationThrottleTimeMs: TNumber;
sharpnessFallbackTimeoutMs: TNumber;
minSharpnessSequenceDurationMs: TNumber;
queueSize: TNumber;
}>>;
}>;
}>;

export declare const TbConfigurationsSchema: TObject<    {
fileUpload: TOptional<TObject<    {
isFallbackUploadEnabled: TBoolean;
}>>;
jumioLiveness: TOptional<TObject<    {
fallbackTimeInMs: TNumber;
farImages: TNumber;
frameRateThreshold: TNumber;
imageCompression: TNumber;
imageResolutionHeight: TNumber;
imageResolutionWidth: TNumber;
initialImages: TNumber;
maxConsecutiveImageTimespanInMs: TNumber;
maxFaceCenterDifference: TNumber;
maximumPseudoPitch: TNumber;
maximumPseudoYaw: TNumber;
minNearFarRatio: TNumber;
minTimePerDistanceInMs: TNumber;
minimumPseudoPitch: TNumber;
minimumPseudoYaw: TNumber;
modelInitTimeoutInMs: TNumber;
nearImages: TNumber;
retries: TNumber;
samplingTimeInMs: TNumber;
tooFarThreshold: TNumber;
tooNearThreshold: TNumber;
transitionImages: TNumber;
userFallbackAllowed: TBoolean;
violationLimit: TNumber;
resolution: TOptional<TUnion<[TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>, TArray<TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>>]>>;
}>>;
idAutocapture: TOptional<TObject<    {
assetsLoadingTimeoutMs: TOptional<TNumber>;
fallbackTimeInMs: TOptional<TNumber>;
excludeDevices: TOptional<TArray<TString>>;
focusTimeInMs: TOptional<TNumber>;
manualFocusTimeInMs: TOptional<TNumber>;
displayRescueCaptureButtonInMs: TOptional<TNumber>;
optimisticFeedbackThreshold: TOptional<TNumber>;
trackerBackdropVisible: TOptional<TBoolean>;
showUnifiedPhysicalIdType: TOptional<TBoolean>;
}>>;
helpScreen: TOptional<TObject<    {
ID: TNumber;
FACEMAP: TNumber;
DOCUMENT: TNumber;
DATA: TNumber;
}>>;
sensorData: TOptional<TObject<    {
intervalLog: TNumber;
intervalSend: TNumber;
}>>;
supplementalImagesV2: TOptional<TArray<TObject<    {
images: TArray<TUnion<[TObject<    {
classifier: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;
captureFrequency: TNumber;
maxBatch: TNumber;
maxQueueSizeBytes: TNumber;
minBufferAge: TNumber;
resolutions: TArray<TNumber>;
}>, TObject<    {
classifier: TLiteral<"FRONT_WITH_FLASH">;
flash: TBoolean;
usabilityExpected: TBoolean;
}>]>>;
}>>>;
uploadWebpForIdCapture: TOptional<TString>;
datadog: TOptional<TObject<    {
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>>;
idSharpness: TOptional<TObject<    {
logSharpnessThreshold: TNumber;
evaluationThrottleTimeMs: TNumber;
sharpnessFallbackTimeoutMs: TNumber;
minSharpnessSequenceDurationMs: TNumber;
queueSize: TNumber;
}>>;
}>;

export declare const TbConfigurationSupplementalImageCollectionSchema: TArray<TUnion<[TObject<    {
classifier: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;
captureFrequency: TNumber;
maxBatch: TNumber;
maxQueueSizeBytes: TNumber;
minBufferAge: TNumber;
resolutions: TArray<TNumber>;
}>, TObject<    {
classifier: TLiteral<"FRONT_WITH_FLASH">;
flash: TBoolean;
usabilityExpected: TBoolean;
}>]>>;

export declare const TbConfigurationSupplementalImageSchema: TUnion<[TObject<    {
classifier: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;
captureFrequency: TNumber;
maxBatch: TNumber;
maxQueueSizeBytes: TNumber;
minBufferAge: TNumber;
resolutions: TArray<TNumber>;
}>, TObject<    {
classifier: TLiteral<"FRONT_WITH_FLASH">;
flash: TBoolean;
usabilityExpected: TBoolean;
}>]>;

export declare const TbConfigurationSupplementalImageSequenceSchema: TObject<    {
classifier: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;
captureFrequency: TNumber;
maxBatch: TNumber;
maxQueueSizeBytes: TNumber;
minBufferAge: TNumber;
resolutions: TArray<TNumber>;
}>;

export declare const TbConfigurationSupplementalImagesV2Schema: TArray<TObject<    {
images: TArray<TUnion<[TObject<    {
classifier: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;
captureFrequency: TNumber;
maxBatch: TNumber;
maxQueueSizeBytes: TNumber;
minBufferAge: TNumber;
resolutions: TArray<TNumber>;
}>, TObject<    {
classifier: TLiteral<"FRONT_WITH_FLASH">;
flash: TBoolean;
usabilityExpected: TBoolean;
}>]>>;
}>>;

export declare const TbConfigurationSupplementalImageWithFlashSchema: TObject<    {
classifier: TLiteral<"FRONT_WITH_FLASH">;
flash: TBoolean;
usabilityExpected: TBoolean;
}>;

export declare const TbConsentDisplayTypeSchema: TUnion<TLiteral<"PASSIVE" | "ACTIVE">[]>;

export declare const TbConsentItemCollectionSchema: TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
privacyPolicyUrl: TOptional<TString>;
localizedPrivacyPolicyUrls: TOptional<TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>>;
displayType: TUnion<TLiteral<"PASSIVE" | "ACTIVE">[]>;
text: TString;
alternativeTexts: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
additionalData: TOptional<TObject<    {
termsOfUseText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
termsOfUseUrl: TString;
selfieDonePolicyText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
}>>;
}>>;

export declare const TbConsentItemSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
privacyPolicyUrl: TOptional<TString>;
localizedPrivacyPolicyUrls: TOptional<TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>>;
displayType: TUnion<TLiteral<"PASSIVE" | "ACTIVE">[]>;
text: TString;
alternativeTexts: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
additionalData: TOptional<TObject<    {
termsOfUseText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
termsOfUseUrl: TString;
selfieDonePolicyText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
}>>;
}>;

export declare const TbCountryCodeSchema: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;

export declare const TbCredentialBaseSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>;

export declare const TbCredentialDataSchema: TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Data>;
deviceRiskVendors: TArray<TString>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>>;
requiredParts: TArray<TString>;
}>]>;

export declare const TbCredentialDocumentSchema: TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Document>;
country: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>;
deviceRiskVendors: TArray<TString>;
requiredParts: TArray<TString>;
}>]>;

export declare const TbCredentialFacemapSchema: TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Facemap>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM">[]>>;
}>;
requiredParts: TOptional<TArray<TString>>;
deviceRiskVendors: TOptional<TArray<TString>>;
}>]>;

export declare const TbCredentialIdBaseSchema: TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Id>;
country: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
}>>;
subType: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
}>>;
deviceRiskVendors: TOptional<TArray<TString>>;
acquisitionMode: TOptional<TString>;
}>]>;

export declare const TbCredentialIdSchema: TTransform<TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Id>;
country: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
}>>;
subType: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
}>>;
deviceRiskVendors: TOptional<TArray<TString>>;
acquisitionMode: TOptional<TString>;
}>]>, ({
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
} & {
type?: {
values: never[];
predefinedType: never;
} | undefined;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: Category.Id;
}) | {
type: {
predefinedType: never;
values: "DIGITAL_IDENTITY"[];
};
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: Category.Id;
}>;

export declare const TbCredentialStepSchema: TUnion<[TUnion<TLiteral<VirtualStep>[]>, TUnion<TLiteral<Category>[]>]>;

export declare const TbCrossDeviceOptionSchema: TUnion<TLiteral<"default" | "email_only" | "qr_only">[]>;

export declare const TbDataCenterSchema: TUnion<TLiteral<"eu" | "us" | "sgp">[]>;

export declare const TbDatadogOverride: TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>;

export declare const TbDatadogOverrideDefaultPrivacyLevel: TObject<    {
defaultPrivacyLevel: TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>;
}>;

export declare const TbDatadogOverrideRule: TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>;

export declare const TbDatadogOverrideSessionReplaySampleRate: TObject<    {
sessionReplaySampleRate: TNumber;
}>;

export declare const TbDatadogOverrideSessionSampleRate: TObject<    {
sessionSampleRate: TNumber;
}>;

export declare const TbDeviceIdConstraintSchema: TObject<    {
video: TObject<    {
deviceId: TObject<    {
exact: TString;
}>;
}>;
audio: TLiteral<false>;
}>;

export declare const TbDeviceRiskTokenSchema: TObject<    {
token: TString;
sdkType: TUnion<TLiteral<"IOVATION">[]>;
}>;

export declare const TbDigitalIdentityBaseSchema: TObject<    {
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>;

export declare const TbDigitalIdentityDigitalDrivingLicensePdfSchema: TObject<    {
subType: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
file: TLiteral<"PDF">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>;

export declare const TbDigitalIdentityEidasSchema: TObject<    {
subType: TLiteral<"EIDAS">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>;

export declare const TbDigitalIdentityIdTypeSchema: TUnion<TLiteral<"DIGITAL_IDENTITY">[]>;

export declare const TbDigitalIdentityMastercardSchema: TObject<    {
subType: TLiteral<"MASTERCARD">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>;

export declare const TbDigitalIdentitySchema: TUnion<[TObject<    {
subType: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
file: TLiteral<"PDF">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"MASTERCARD">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"EIDAS">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"TRUST_CHECK">;
provider: TOptional<TString>;
logoUrl: TOptional<TString>;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>]>;

export declare const TbDigitalIdentitySubtypeBraPdfSchema: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;

export declare const TbDigitalIdentitySubtypeSchema: TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>;

export declare const TbDocumentPreviewSchema: TObject<    {
type: TLiteral<"document-image-preview">;
acquisitionGuid: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
credentialGuid: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
originCredentialFileGuid: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
credentialFileGuid: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TString;
base64: TString;
}>;

export declare const TbDocumentTypeCodeSchema: TString;

export declare const TbDocumentVariantSchema: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;

export declare const TbEidasStateSchema: TUnion<TLiteral<"FAILED" | "SUCCESS" | "NOT_AVAILABLE">[]>;

export declare const TbEmailErrorReasonSchema: TUnion<TLiteral<890 | 891 | 892 | 893>[]>;

export declare const TbErrorDomainSchema: TUnion<TLiteral<"A" | "B" | "C" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N">[]>;

export declare const TbExecutionEnvironmentSchema: TUnion<TLiteral<"e2e" | "production" | "development">[]>;

export declare const TbExtractedDataSchema: TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>;

export declare const TbExtractionSideSchema: TUnion<TLiteral<"FRONT" | "BACK">[]>;

export declare const TbFaceFinderBorderWidthSchema: TUnion<TLiteral<"idle" | "scanning">[]>;

export declare const TbFacemapVerificationMethodSchema: TUnion<TLiteral<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM">[]>;

export declare const TbFacingModeConstraintSchema: TObject<    {
video: TIntersect<[TRecord<TString, TUnknown>, TObject<    {
facingMode: TObject<    {
ideal: TUnion<[TLiteral<"user">, TLiteral<"environment">]>;
}>;
}>]>;
audio: TLiteral<false>;
}>;

export declare const TbFacingModePreferenceSchema: TUnion<TLiteral<"user" | "environment">[]>;

export declare const TbFileFormatSchema: TUnion<TLiteral<"PNG" | "WEBP" | "JPG" | "JPEG" | "JPEG_2000" | "PDF" | "DAT">[]>;

export declare const TbFileSourceSchema: TUnion<TLiteral<"camera" | "upload">[]>;

declare const TbFileSourceSchema_2: TUnion<TLiteral<"upload" | "clipboard">[]>;

export declare const TbFileStoreEntityWithDecisionPassSchema: TObject<    {
upload: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;
usability: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>;
thumbnail: TOptional<TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>>;
}>;

export declare const TbFileStoreEntityWithDecisionRejectSchema: TObject<    {
upload: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;
usability: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>;
thumbnail: TOptional<TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>>;
}>;

export declare const TbFileStoreEntityWithDecisionSchema: TObject<    {
upload: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;
usability: TUnion<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"NOT_AVAILABLE">;
}>;
}>]>;
thumbnail: TOptional<TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>>;
}>;

export declare const TbFileStoreEntityWithExceededAttemptsSchema: TObject<    {
upload: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;
usability: TUndefined;
thumbnail: TOptional<TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>>;
}>;

export declare const TbFileStoreEntityWithUploadAndThumbnailSchema: TObject<    {
upload: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;
usability: TOptional<TUnion<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"NOT_AVAILABLE">;
}>;
}>]>>;
thumbnail: TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>;
}>;

export declare const TbFileStoreEntityWithUsabilityPassOrRejectedOrExceededSchema: TUnion<[TObject<    {
upload: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;
usability: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>;
thumbnail: TOptional<TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>>;
}>, TObject<    {
upload: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;
usability: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>;
thumbnail: TOptional<TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>>;
}>, TObject<    {
upload: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;
usability: TUndefined;
thumbnail: TOptional<TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>>;
}>]>;

export declare const TbGetIdTypeFromCollectionParamsSchema: TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>;
selectedIdSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
selectedDigitalIdProvider: TOptional<TString>;
supportedCountries: TOptional<TArray<TObject<    {
country: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
idTypes: TArray<TUnion<[TUnion<[TObject<    {
idType: TLiteral<"ID_CARD">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"DRIVING_LICENSE">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"PASSPORT">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"VISA">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>]>, TUnion<[TObject<    {
subType: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
file: TLiteral<"PDF">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"MASTERCARD">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"EIDAS">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"TRUST_CHECK">;
provider: TOptional<TString>;
logoUrl: TOptional<TString>;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>]>]>>;
}>>>;
}>;

export declare const TbIdCredentialDigitalIdentityDigitalDrivingLicensePdfSelectionSchema: TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
}>;

export declare const TbIdCredentialDigitalIdentityEidasSelectionSchema: TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"EIDAS">;
}>;

export declare const TbIdCredentialDigitalIdentityMasterCardSelectionSchema: TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"MASTERCARD">;
}>;

export declare const TbIdCredentialDigitalIdentitySelectionSchema: TUnion<[TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"EIDAS">;
}>, TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
}>, TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"MASTERCARD">;
}>]>;

export declare const TbIdCredentialPhysicalDocumentSelectionSchema: TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA">[]>;
}>;

export declare const TbIdCredentialSelectionSchema: TUnion<[TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA">[]>;
}>, TUnion<[TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"EIDAS">;
}>, TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
}>, TObject<    {
selectedCountry: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
selectedIdType: TLiteral<"DIGITAL_IDENTITY">;
selectedIdSubtype: TLiteral<"MASTERCARD">;
}>]>]>;

export declare const TbIdEntitySchema: TUnion<[TUnion<[TObject<    {
idType: TLiteral<"ID_CARD">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"DRIVING_LICENSE">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"PASSPORT">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"VISA">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>]>, TUnion<[TObject<    {
subType: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
file: TLiteral<"PDF">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"MASTERCARD">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"EIDAS">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"TRUST_CHECK">;
provider: TOptional<TString>;
logoUrl: TOptional<TString>;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>]>]>;

export declare const TbIdFormatSchema: TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>;

export declare const TbIdSequenceClassifierSchema: TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>;

export declare const TbIdSideSchema: TUnion<TLiteral<"FRONT" | "BACK">[]>;

declare const TbIdSideSchema_2: TUnion<[TLiteral<"FRONT">, TLiteral<"BACK">]>;

export declare const TbIdTypeFoundSchema: TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE">[]>;

export declare const TbIdTypeSchema: TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>;

export declare const TbInputSizeSchema: TUnion<TLiteral<"small" | "medium">[]>;

export declare const TbJCredentialMapSchema: TObject<    {
ID: TTransform<TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Id>;
country: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
}>>;
subType: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
}>>;
deviceRiskVendors: TOptional<TArray<TString>>;
acquisitionMode: TOptional<TString>;
}>]>, ({
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
} & {
type?: {
values: never[];
predefinedType: never;
} | undefined;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: Category.Id;
}) | {
type: {
predefinedType: never;
values: "DIGITAL_IDENTITY"[];
};
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: Category.Id;
}>;
FACEMAP: TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Facemap>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM">[]>>;
}>;
requiredParts: TOptional<TArray<TString>>;
deviceRiskVendors: TOptional<TArray<TString>>;
}>]>;
DOCUMENT: TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Document>;
country: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>;
deviceRiskVendors: TArray<TString>;
requiredParts: TArray<TString>;
}>]>;
DATA: TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Data>;
deviceRiskVendors: TArray<TString>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>>;
requiredParts: TArray<TString>;
}>]>;
}>;

export declare const TbJCredentialSchema: TUnion<[TTransform<TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Id>;
country: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
}>>;
subType: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
}>>;
deviceRiskVendors: TOptional<TArray<TString>>;
acquisitionMode: TOptional<TString>;
}>]>, ({
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
} & {
type?: {
values: never[];
predefinedType: never;
} | undefined;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: Category.Id;
}) | {
type: {
predefinedType: never;
values: "DIGITAL_IDENTITY"[];
};
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: Category.Id;
}>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Facemap>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM">[]>>;
}>;
requiredParts: TOptional<TArray<TString>>;
deviceRiskVendors: TOptional<TArray<TString>>;
}>]>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Document>;
country: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>;
deviceRiskVendors: TArray<TString>;
requiredParts: TArray<TString>;
}>]>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<Category.Data>;
deviceRiskVendors: TArray<TString>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>>;
requiredParts: TArray<TString>;
}>]>]>;

export declare const TbJLiveFallbackPolicySchema: TUnion<TLiteral<"disabled" | "soft" | "strict">[]>;

export declare const TbJumioEnvironmentSchema: TUnion<TLiteral<"test-eu" | "test-us" | "staging-eu" | "staging-us" | "prod-eu" | "prod-us" | "prod-sgp" | "simulator">[]>;

export declare const TbJumioLivenessClassifierSchema: TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>;

export declare const TbJumioLivenessResolutionCollectionSchema: TArray<TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>>;

export declare const TbJumioLivenessResolutionSchema: TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>;

export declare const TbJumioLivenessResolutionSingleOrCollectionSchema: TUnion<[TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>, TArray<TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>>]>;

export declare const TbJumioLivenessResolutionWidthHeightSchema: TObject<    {
width: TNumber;
height: TNumber;
}>;

export declare const TbJumioLivenessSettingsSchema: TObject<    {
fallbackTimeInMs: TNumber;
farImages: TNumber;
frameRateThreshold: TNumber;
imageCompression: TNumber;
imageResolutionHeight: TNumber;
imageResolutionWidth: TNumber;
initialImages: TNumber;
maxConsecutiveImageTimespanInMs: TNumber;
maxFaceCenterDifference: TNumber;
maximumPseudoPitch: TNumber;
maximumPseudoYaw: TNumber;
minNearFarRatio: TNumber;
minTimePerDistanceInMs: TNumber;
minimumPseudoPitch: TNumber;
minimumPseudoYaw: TNumber;
modelInitTimeoutInMs: TNumber;
nearImages: TNumber;
retries: TNumber;
samplingTimeInMs: TNumber;
tooFarThreshold: TNumber;
tooNearThreshold: TNumber;
transitionImages: TNumber;
userFallbackAllowed: TBoolean;
violationLimit: TNumber;
resolution: TOptional<TUnion<[TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>, TArray<TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>>]>>;
}>;

export declare const TbJumioSdkMessageBaseSchema: TObject<    {
id: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;
title: TString;
message: TOptional<TString>;
overlay: TOptional<TBoolean>;
closable: TBoolean;
shouldPost: TOptional<TBoolean>;
}>;

export declare const TbJumioSdkMessageErrorSchema: TObject<    {
type: TLiteral<"error">;
date: TDate;
transactionId: TString;
errorCode: TOptional<TString>;
publicErrorCode: TOptional<TUnsafe<PublicError>>;
id: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;
title: TString;
message: TOptional<TString>;
overlay: TOptional<TBoolean>;
closable: TBoolean;
shouldPost: TOptional<TBoolean>;
}>;

export declare const TbJumioSdkMessageIdSchema: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;

export declare const TbJumioSdkMessageProgressSchema: TObject<    {
type: TLiteral<"progress">;
title: TOptional<TString>;
progress: TOptional<TNumber>;
id: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;
message: TOptional<TString>;
overlay: TOptional<TBoolean>;
closable: TBoolean;
shouldPost: TOptional<TBoolean>;
}>;

export declare const TbJumioSdkMessageSchema: TUnion<[TObject<    {
type: TLiteral<"error">;
date: TDate;
transactionId: TString;
errorCode: TOptional<TString>;
publicErrorCode: TOptional<TUnsafe<PublicError>>;
id: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;
title: TString;
message: TOptional<TString>;
overlay: TOptional<TBoolean>;
closable: TBoolean;
shouldPost: TOptional<TBoolean>;
}>, TObject<    {
type: TLiteral<"success">;
id: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;
title: TString;
message: TOptional<TString>;
overlay: TOptional<TBoolean>;
closable: TBoolean;
shouldPost: TOptional<TBoolean>;
}>, TObject<    {
type: TLiteral<"progress">;
title: TOptional<TString>;
progress: TOptional<TNumber>;
id: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;
message: TOptional<TString>;
overlay: TOptional<TBoolean>;
closable: TBoolean;
shouldPost: TOptional<TBoolean>;
}>]>;

export declare const TbJumioSdkMessageSuccessSchema: TObject<    {
type: TLiteral<"success">;
id: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;
title: TString;
message: TOptional<TString>;
overlay: TOptional<TBoolean>;
closable: TBoolean;
shouldPost: TOptional<TBoolean>;
}>;

export declare const TbJumioSdkMessageTypeSchema: TUnion<TLiteral<"error" | "progress" | "success">[]>;

export declare const TbJumioSdkScheduledMessageSchema: TObject<    {
delayMs: TNumber;
type: TLiteral<"progress">;
title: TOptional<TString>;
progress: TOptional<TNumber>;
id: TUnion<TLiteral<"acquisition-failed" | "acquisition-success" | "usability-check" | "camera-generic-error" | "camera-not-allowed-error" | "camera-initialization" | "session-expired" | "uploading" | "finalizing" | "embargoed-country" | "liveness-failed" | "eidas-failed" | "look-up-id" | "submitting-consent">[]>;
message: TOptional<TString>;
overlay: TOptional<TBoolean>;
closable: TBoolean;
shouldPost: TOptional<TBoolean>;
}>;

export declare const TbLegacyErrorCodeSchema: TUnion<TLiteral<9100 | 9200 | 9210 | 9300 | 9301 | 9400 | 9800 | 9801 | 9822 | 9836 | 9900>[]>;

export declare const TbLinkedModuleSchema: TUnion<TLiteral<"JUMIO_LIVENESS" | "DIGITAL_IDENTITY" | "IOVATION" | "MRZ" | "NFC" | "BARCODE" | "LINEFINDER" | "DOCFINDER" | "MANUAL" | "FACE_MANUAL" | "DATADOG" | "SARDINE">[]>;

export declare const TbLivenessResultSchema: TUnion<TLiteral<"TRUE" | "FALSE" | "BO">[]>;

export declare const TbLivenessSeriesClassifierSchema: TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>;

declare const TbLocaleSchema: TUnion<TLiteral<"id" | "hr" | "th" | "tr" | "ms" | "el" | "ar" | "az" | "bg" | "bn" | "bn_IN" | "bn-IN" | "ca" | "ceb" | "ceb_PH" | "ceb-PH" | "cs" | "da" | "de" | "en" | "en_GB" | "en-GB" | "en_US" | "en-US" | "es" | "es_MX" | "es-MX" | "et" | "fi" | "fil" | "fil_PH" | "fil-PH" | "fr" | "fr_CA" | "fr-CA" | "ga" | "he" | "hi" | "hi_IN" | "hi-IN" | "hu" | "hy" | "it" | "is" | "ja" | "jv" | "jv_ID" | "jv-ID" | "ka_GE" | "ka-GE" | "kk" | "km" | "km_KH" | "km-KH" | "ko" | "lt" | "lv" | "my" | "my_MM" | "my-MM" | "nl" | "no" | "pl" | "pt" | "pt_BR" | "pt-BR" | "ro" | "ru" | "sk" | "sr_Cyrl" | "sr-Cyrl" | "sr" | "sr_Latn" | "sr-Latn" | "sl" | "sv" | "sq" | "sw" | "uk" | "ur" | "uz" | "vi" | "zh" | "zh_CN" | "zh-CN" | "zh_HK" | "zh-HK">[]>;

export declare const TbLocalizedConsentTextSchema: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;

declare const TbLoggerDatadogRumInitConfiguration: TObject<    {
applicationId: TOptional<TString>;
propagateTraceBaggage: TOptional<TBoolean>;
traceSampleRate: TOptional<TNumber>;
traceContextInjection: TOptional<TUnion<[TLiteral<"all">, TLiteral<"sampled">]>>;
workerUrl: TOptional<TString>;
compressIntakeRequests: TOptional<TBoolean>;
remoteConfigurationId: TOptional<TString>;
remoteConfigurationProxy: TOptional<TString>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
enablePrivacyForActionName: TOptional<TBoolean>;
subdomain: TOptional<TString>;
sessionReplaySampleRate: TOptional<TNumber>;
startSessionReplayRecordingManually: TOptional<TBoolean>;
trackUserInteractions: TOptional<TBoolean>;
actionNameAttribute: TOptional<TString>;
trackViewsManually: TOptional<TBoolean>;
trackBfcacheViews: TOptional<TBoolean>;
trackResources: TOptional<TBoolean>;
trackLongTasks: TOptional<TBoolean>;
trackEarlyRequests: TOptional<TBoolean>;
trackFeatureFlagsForEvents: TOptional<TArray<TUnion<[TLiteral<"vital">, TLiteral<"action">, TLiteral<"long_task">, TLiteral<"resource">]>>>;
profilingSampleRate: TOptional<TNumber>;
}>;

export declare const TbLoggerDatadogRumInitConfigurationDefaultPrivacyLevel: TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>;

declare const TbLoggerDatadogRumParams: TObject<    {
type: TLiteral<"LoggerDatadogRum">;
isEnabled: TBoolean;
config: TObject<    {
applicationId: TOptional<TString>;
propagateTraceBaggage: TOptional<TBoolean>;
traceSampleRate: TOptional<TNumber>;
traceContextInjection: TOptional<TUnion<[TLiteral<"all">, TLiteral<"sampled">]>>;
workerUrl: TOptional<TString>;
compressIntakeRequests: TOptional<TBoolean>;
remoteConfigurationId: TOptional<TString>;
remoteConfigurationProxy: TOptional<TString>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
enablePrivacyForActionName: TOptional<TBoolean>;
subdomain: TOptional<TString>;
sessionReplaySampleRate: TOptional<TNumber>;
startSessionReplayRecordingManually: TOptional<TBoolean>;
trackUserInteractions: TOptional<TBoolean>;
actionNameAttribute: TOptional<TString>;
trackViewsManually: TOptional<TBoolean>;
trackBfcacheViews: TOptional<TBoolean>;
trackResources: TOptional<TBoolean>;
trackLongTasks: TOptional<TBoolean>;
trackEarlyRequests: TOptional<TBoolean>;
trackFeatureFlagsForEvents: TOptional<TArray<TUnion<[TLiteral<"vital">, TLiteral<"action">, TLiteral<"long_task">, TLiteral<"resource">]>>>;
profilingSampleRate: TOptional<TNumber>;
}>;
}>;

export declare const TbLogLevelSchema: TUnion<TLiteral<"error" | "info" | "none" | "trace" | "debug" | "warn">[]>;

export declare const TbLookupStateSchema: TUnion<TLiteral<"FOUND" | "NOT_FOUND">[]>;

export declare const TbManualCaptureFallbackReasonSchema: TUnion<TLiteral<"module-loading-error" | "module-initialization-error" | "worker-crashed" | "worker-error" | "post-message-error" | "struggle" | "resource-fetch-timeout" | "timeout" | "user-selection" | "excluded-device">[]>;

declare const TbMerchantSettingsAutocaptureSchema: TObject<    {
idEnabled: TOptional<TBoolean>;
docVEnabled: TOptional<TBoolean>;
newDesign: TOptional<TBoolean>;
}>;

declare const TbMerchantSettingsBrandingSchema: TObject<    {
primaryColor: TOptional<TString>;
accentColor: TOptional<TString>;
logoUri: TOptional<TString>;
}>;

declare const TbMerchantSettingsCrossDeviceSchema: TObject<    {
crossDeviceOption: TOptional<TUnion<TLiteral<"default" | "email_only" | "qr_only">[]>>;
enabled: TBoolean;
link: TOptional<TString>;
}>;

export declare const TbMerchantSettingsSchema: TObject<    {
autoCapture: TOptional<TObject<    {
idEnabled: TOptional<TBoolean>;
docVEnabled: TOptional<TBoolean>;
newDesign: TOptional<TBoolean>;
}>>;
branding: TOptional<TObject<    {
primaryColor: TOptional<TString>;
accentColor: TOptional<TString>;
logoUri: TOptional<TString>;
}>>;
crossDevice: TOptional<TObject<    {
crossDeviceOption: TOptional<TUnion<TLiteral<"default" | "email_only" | "qr_only">[]>>;
enabled: TBoolean;
link: TOptional<TString>;
}>>;
crossDeviceOnly: TOptional<TBoolean>;
datadog: TOptional<TObject<    {
enabled: TBoolean;
merchantName: TString;
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>>;
idFlipAnimationDuration: TOptional<TNumber>;
integrityCheck: TOptional<TBoolean>;
isExplicitUploadEnabled: TOptional<TBoolean>;
isFileUploadEnabled: TOptional<TBoolean>;
jLiveEnabled: TOptional<TBoolean>;
jLiveFallbackPolicy: TUnion<TLiteral<"disabled" | "soft" | "strict">[]>;
jLiveIod: TOptional<TNumber>;
rescueSessionEnabled: TOptional<TBoolean>;
showBackNavigationButton: TOptional<TBoolean>;
showLanguageSelector: TOptional<TBoolean>;
skipDocTypeSelectionPage: TOptional<TBoolean>;
skipLivenessGuidancePage: TOptional<TBoolean>;
}>;

export declare const TbNavigationTypeSchema: TUnion<TLiteral<"browser" | "memory">[]>;

export declare const TbOrientationSchema: TUnion<TLiteral<"landscape" | "portrait">[]>;

export declare const TbPhysicalDocumentBaseSchema: TObject<    {
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>;

export declare const TbPhysicalDocumentDrivingLicenseSchema: TObject<    {
idType: TLiteral<"DRIVING_LICENSE">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>;

export declare const TbPhysicalDocumentIdCardSchema: TObject<    {
idType: TLiteral<"ID_CARD">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>;

export declare const TbPhysicalDocumentPassportSchema: TObject<    {
idType: TLiteral<"PASSPORT">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>;

export declare const TbPhysicalDocumentSchema: TUnion<[TObject<    {
idType: TLiteral<"ID_CARD">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"DRIVING_LICENSE">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"PASSPORT">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"VISA">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>]>;

export declare const TbPhysicalDocumentSideClassifierSchema: TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>;

export declare const TbPhysicalDocumentVariantPartSchema: TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>;

export declare const TbPhysicalDocumentVariantSchema: TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>;

export declare const TbPhysicalDocumentVisaSchema: TObject<    {
idType: TLiteral<"VISA">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>;

export declare const TbPhysicalIdTypeSchema: TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA">[]>;

export declare const TbPredefinedTypeAndValuesHolderSchema: <T extends TSchema>(valuesType: T) => TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<T>;
}>;

export declare const TbPredefinedTypeSchema: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;

export declare const TbPromptLoaderStateSchema: TUnion<TLiteral<"progress" | "pulsing" | "initial">[]>;

export declare const TbRedirectsSchema: TObject<    {
success: TOptional<TString>;
error: TOptional<TString>;
}>;

export declare const TbRequestCodeSchema: TUnion<TLiteral<0 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27>[]>;

export declare const TbRequestStatusTypeSchema: TUnion<TLiteral<"error" | "success" | "ready" | "loading">[]>;

export declare const TbSdkTypeSchema: TUnion<TLiteral<"IOVATION">[]>;

export declare const TbSelectTypeSchema: TUnion<TLiteral<"default" | "capture-screen">[]>;

export declare const TbSelfieSequenceClassifierSchema: TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>;

export declare const TbSensorCaptureIntervalsSchema: TObject<    {
intervalLog: TNumber;
intervalSend: TNumber;
}>;

declare const TbSequenceImageClassifierSchema: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;

export declare const TbSettingsDefaultSchema: TObject<    {
accountId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
acquisitionReference: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
brandingEnabled: TBoolean;
consents: TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
privacyPolicyUrl: TOptional<TString>;
localizedPrivacyPolicyUrls: TOptional<TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>>;
displayType: TUnion<TLiteral<"PASSIVE" | "ACTIVE">[]>;
text: TString;
alternativeTexts: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
additionalData: TOptional<TObject<    {
termsOfUseText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
termsOfUseUrl: TString;
selfieDonePolicyText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
}>>;
}>>;
countryForIp: TString;
credentials: TArray<TUnion<[TTransform<TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Id>;
country: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
}>>;
subType: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
}>>;
deviceRiskVendors: TOptional<TArray<TString>>;
acquisitionMode: TOptional<TString>;
}>]>, ({
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
} & {
type?: {
values: never[];
predefinedType: never;
} | undefined;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: import("../../../api/src/index.js").Category.Id;
}) | {
type: {
predefinedType: never;
values: "DIGITAL_IDENTITY"[];
};
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: import("../../../api/src/index.js").Category.Id;
}>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Facemap>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM">[]>>;
}>;
requiredParts: TOptional<TArray<TString>>;
deviceRiskVendors: TOptional<TArray<TString>>;
}>]>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Document>;
country: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>;
deviceRiskVendors: TArray<TString>;
requiredParts: TArray<TString>;
}>]>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Data>;
deviceRiskVendors: TArray<TString>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>>;
requiredParts: TArray<TString>;
}>]>]>>;
maxFileUploadSize: TNumber;
merchantSettings: TOptional<TObject<    {
autoCapture: TOptional<TObject<    {
idEnabled: TOptional<TBoolean>;
docVEnabled: TOptional<TBoolean>;
newDesign: TOptional<TBoolean>;
}>>;
branding: TOptional<TObject<    {
primaryColor: TOptional<TString>;
accentColor: TOptional<TString>;
logoUri: TOptional<TString>;
}>>;
crossDevice: TOptional<TObject<    {
crossDeviceOption: TOptional<TUnion<TLiteral<"default" | "email_only" | "qr_only">[]>>;
enabled: TBoolean;
link: TOptional<TString>;
}>>;
crossDeviceOnly: TOptional<TBoolean>;
datadog: TOptional<TObject<    {
enabled: TBoolean;
merchantName: TString;
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>>;
idFlipAnimationDuration: TOptional<TNumber>;
integrityCheck: TOptional<TBoolean>;
isExplicitUploadEnabled: TOptional<TBoolean>;
isFileUploadEnabled: TOptional<TBoolean>;
jLiveEnabled: TOptional<TBoolean>;
jLiveFallbackPolicy: TUnion<TLiteral<"disabled" | "soft" | "strict">[]>;
jLiveIod: TOptional<TNumber>;
rescueSessionEnabled: TOptional<TBoolean>;
showBackNavigationButton: TOptional<TBoolean>;
showLanguageSelector: TOptional<TBoolean>;
skipDocTypeSelectionPage: TOptional<TBoolean>;
skipLivenessGuidancePage: TOptional<TBoolean>;
}>>;
redirects: TOptional<TObject<    {
success: TOptional<TString>;
error: TOptional<TString>;
}>>;
stateForIp: TString;
supportedCountries: TArray<TObject<    {
country: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
idTypes: TArray<TUnion<[TUnion<[TObject<    {
idType: TLiteral<"ID_CARD">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"DRIVING_LICENSE">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"PASSPORT">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"VISA">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>]>, TUnion<[TObject<    {
subType: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
file: TLiteral<"PDF">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"MASTERCARD">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"EIDAS">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"TRUST_CHECK">;
provider: TOptional<TString>;
logoUrl: TOptional<TString>;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>]>]>>;
}>>;
supportedDocumentTypes: TArray<TObject<    {
code: TString;
name: TString;
maxPages: TNumber;
translations: TOptional<TRecord<TString, TString>>;
}>>;
skipStartScreen: TOptional<TBoolean>;
timestamp: TString;
workflowDefinitionKey: TNumber;
configurations: TObject<    {
fileUpload: TOptional<TObject<    {
isFallbackUploadEnabled: TBoolean;
}>>;
jumioLiveness: TOptional<TObject<    {
fallbackTimeInMs: TNumber;
farImages: TNumber;
frameRateThreshold: TNumber;
imageCompression: TNumber;
imageResolutionHeight: TNumber;
imageResolutionWidth: TNumber;
initialImages: TNumber;
maxConsecutiveImageTimespanInMs: TNumber;
maxFaceCenterDifference: TNumber;
maximumPseudoPitch: TNumber;
maximumPseudoYaw: TNumber;
minNearFarRatio: TNumber;
minTimePerDistanceInMs: TNumber;
minimumPseudoPitch: TNumber;
minimumPseudoYaw: TNumber;
modelInitTimeoutInMs: TNumber;
nearImages: TNumber;
retries: TNumber;
samplingTimeInMs: TNumber;
tooFarThreshold: TNumber;
tooNearThreshold: TNumber;
transitionImages: TNumber;
userFallbackAllowed: TBoolean;
violationLimit: TNumber;
resolution: TOptional<TUnion<[TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>, TArray<TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>>]>>;
}>>;
idAutocapture: TOptional<TObject<    {
assetsLoadingTimeoutMs: TOptional<TNumber>;
fallbackTimeInMs: TOptional<TNumber>;
excludeDevices: TOptional<TArray<TString>>;
focusTimeInMs: TOptional<TNumber>;
manualFocusTimeInMs: TOptional<TNumber>;
displayRescueCaptureButtonInMs: TOptional<TNumber>;
optimisticFeedbackThreshold: TOptional<TNumber>;
trackerBackdropVisible: TOptional<TBoolean>;
showUnifiedPhysicalIdType: TOptional<TBoolean>;
}>>;
helpScreen: TOptional<TObject<    {
ID: TNumber;
FACEMAP: TNumber;
DOCUMENT: TNumber;
DATA: TNumber;
}>>;
sensorData: TOptional<TObject<    {
intervalLog: TNumber;
intervalSend: TNumber;
}>>;
supplementalImagesV2: TOptional<TArray<TObject<    {
images: TArray<TUnion<[TObject<    {
classifier: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;
captureFrequency: TNumber;
maxBatch: TNumber;
maxQueueSizeBytes: TNumber;
minBufferAge: TNumber;
resolutions: TArray<TNumber>;
}>, TObject<    {
classifier: TLiteral<"FRONT_WITH_FLASH">;
flash: TBoolean;
usabilityExpected: TBoolean;
}>]>>;
}>>>;
uploadWebpForIdCapture: TOptional<TString>;
datadog: TOptional<TObject<    {
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>>;
idSharpness: TOptional<TObject<    {
logSharpnessThreshold: TNumber;
evaluationThrottleTimeMs: TNumber;
sharpnessFallbackTimeoutMs: TNumber;
minSharpnessSequenceDurationMs: TNumber;
queueSize: TNumber;
}>>;
}>;
}>;

export declare const TbSettingsSchema: TObject<    {
accountId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
acquisitionReference: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
brandingEnabled: TBoolean;
consents: TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
privacyPolicyUrl: TOptional<TString>;
localizedPrivacyPolicyUrls: TOptional<TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>>;
displayType: TUnion<TLiteral<"PASSIVE" | "ACTIVE">[]>;
text: TString;
alternativeTexts: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
additionalData: TOptional<TObject<    {
termsOfUseText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
termsOfUseUrl: TString;
selfieDonePolicyText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
}>>;
}>>;
countryForIp: TString;
credentials: TArray<TUnion<[TTransform<TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Id>;
country: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
}>>;
subType: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
}>>;
deviceRiskVendors: TOptional<TArray<TString>>;
acquisitionMode: TOptional<TString>;
}>]>, ({
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
} & {
type?: {
values: never[];
predefinedType: never;
} | undefined;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: import("../../../api/src/index.js").Category.Id;
}) | {
type: {
predefinedType: never;
values: "DIGITAL_IDENTITY"[];
};
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: import("../../../api/src/index.js").Category.Id;
}>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Facemap>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM">[]>>;
}>;
requiredParts: TOptional<TArray<TString>>;
deviceRiskVendors: TOptional<TArray<TString>>;
}>]>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Document>;
country: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>;
deviceRiskVendors: TArray<TString>;
requiredParts: TArray<TString>;
}>]>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Data>;
deviceRiskVendors: TArray<TString>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>>;
requiredParts: TArray<TString>;
}>]>]>>;
maxFileUploadSize: TNumber;
merchantSettings: TOptional<TObject<    {
autoCapture: TOptional<TObject<    {
idEnabled: TOptional<TBoolean>;
docVEnabled: TOptional<TBoolean>;
newDesign: TOptional<TBoolean>;
}>>;
branding: TOptional<TObject<    {
primaryColor: TOptional<TString>;
accentColor: TOptional<TString>;
logoUri: TOptional<TString>;
}>>;
crossDevice: TOptional<TObject<    {
crossDeviceOption: TOptional<TUnion<TLiteral<"default" | "email_only" | "qr_only">[]>>;
enabled: TBoolean;
link: TOptional<TString>;
}>>;
crossDeviceOnly: TOptional<TBoolean>;
datadog: TOptional<TObject<    {
enabled: TBoolean;
merchantName: TString;
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>>;
idFlipAnimationDuration: TOptional<TNumber>;
integrityCheck: TOptional<TBoolean>;
isExplicitUploadEnabled: TOptional<TBoolean>;
isFileUploadEnabled: TOptional<TBoolean>;
jLiveEnabled: TOptional<TBoolean>;
jLiveFallbackPolicy: TUnion<TLiteral<"disabled" | "soft" | "strict">[]>;
jLiveIod: TOptional<TNumber>;
rescueSessionEnabled: TOptional<TBoolean>;
showBackNavigationButton: TOptional<TBoolean>;
showLanguageSelector: TOptional<TBoolean>;
skipDocTypeSelectionPage: TOptional<TBoolean>;
skipLivenessGuidancePage: TOptional<TBoolean>;
}>>;
redirects: TOptional<TObject<    {
success: TOptional<TString>;
error: TOptional<TString>;
}>>;
stateForIp: TString;
supportedCountries: TArray<TObject<    {
country: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
idTypes: TArray<TUnion<[TUnion<[TObject<    {
idType: TLiteral<"ID_CARD">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"DRIVING_LICENSE">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"PASSPORT">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"VISA">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>]>, TUnion<[TObject<    {
subType: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
file: TLiteral<"PDF">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"MASTERCARD">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"EIDAS">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"TRUST_CHECK">;
provider: TOptional<TString>;
logoUrl: TOptional<TString>;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>]>]>>;
}>>;
supportedDocumentTypes: TArray<TObject<    {
code: TString;
name: TString;
maxPages: TNumber;
translations: TOptional<TRecord<TString, TString>>;
}>>;
skipStartScreen: TOptional<TBoolean>;
timestamp: TString;
workflowDefinitionKey: TNumber;
configurations: TObject<    {
fileUpload: TOptional<TObject<    {
isFallbackUploadEnabled: TBoolean;
}>>;
jumioLiveness: TOptional<TObject<    {
fallbackTimeInMs: TNumber;
farImages: TNumber;
frameRateThreshold: TNumber;
imageCompression: TNumber;
imageResolutionHeight: TNumber;
imageResolutionWidth: TNumber;
initialImages: TNumber;
maxConsecutiveImageTimespanInMs: TNumber;
maxFaceCenterDifference: TNumber;
maximumPseudoPitch: TNumber;
maximumPseudoYaw: TNumber;
minNearFarRatio: TNumber;
minTimePerDistanceInMs: TNumber;
minimumPseudoPitch: TNumber;
minimumPseudoYaw: TNumber;
modelInitTimeoutInMs: TNumber;
nearImages: TNumber;
retries: TNumber;
samplingTimeInMs: TNumber;
tooFarThreshold: TNumber;
tooNearThreshold: TNumber;
transitionImages: TNumber;
userFallbackAllowed: TBoolean;
violationLimit: TNumber;
resolution: TOptional<TUnion<[TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>, TArray<TUnion<[TObject<    {
width: TNumber;
height: TNumber;
}>, TObject<    {
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
width: TNumber;
height: TNumber;
aspectRatio: TNumber;
}>, TObject<    {
aspectRatio: TNumber;
}>, TObject<    {
height: TNumber;
}>, TObject<    {
width: TNumber;
}>]>>]>>;
}>>;
idAutocapture: TOptional<TObject<    {
assetsLoadingTimeoutMs: TOptional<TNumber>;
fallbackTimeInMs: TOptional<TNumber>;
excludeDevices: TOptional<TArray<TString>>;
focusTimeInMs: TOptional<TNumber>;
manualFocusTimeInMs: TOptional<TNumber>;
displayRescueCaptureButtonInMs: TOptional<TNumber>;
optimisticFeedbackThreshold: TOptional<TNumber>;
trackerBackdropVisible: TOptional<TBoolean>;
showUnifiedPhysicalIdType: TOptional<TBoolean>;
}>>;
helpScreen: TOptional<TObject<    {
ID: TNumber;
FACEMAP: TNumber;
DOCUMENT: TNumber;
DATA: TNumber;
}>>;
sensorData: TOptional<TObject<    {
intervalLog: TNumber;
intervalSend: TNumber;
}>>;
supplementalImagesV2: TOptional<TArray<TObject<    {
images: TArray<TUnion<[TObject<    {
classifier: TUnion<[TLiteral<"ID_SEQUENCE">, TLiteral<"SELFIE_SEQUENCE">]>;
captureFrequency: TNumber;
maxBatch: TNumber;
maxQueueSizeBytes: TNumber;
minBufferAge: TNumber;
resolutions: TArray<TNumber>;
}>, TObject<    {
classifier: TLiteral<"FRONT_WITH_FLASH">;
flash: TBoolean;
usabilityExpected: TBoolean;
}>]>>;
}>>>;
uploadWebpForIdCapture: TOptional<TString>;
datadog: TOptional<TObject<    {
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>>;
idSharpness: TOptional<TObject<    {
logSharpnessThreshold: TNumber;
evaluationThrottleTimeMs: TNumber;
sharpnessFallbackTimeoutMs: TNumber;
minSharpnessSequenceDurationMs: TNumber;
queueSize: TNumber;
}>>;
}>;
}>;

export declare const TbSettingsWithoutConfigurationsSchema: TObject<    {
accountId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
acquisitionReference: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
brandingEnabled: TBoolean;
consents: TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
privacyPolicyUrl: TOptional<TString>;
localizedPrivacyPolicyUrls: TOptional<TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>>;
displayType: TUnion<TLiteral<"PASSIVE" | "ACTIVE">[]>;
text: TString;
alternativeTexts: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
additionalData: TOptional<TObject<    {
termsOfUseText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
termsOfUseUrl: TString;
selfieDonePolicyText: TObject<    {
id: TOptional<TString>;
hr: TOptional<TString>;
th: TOptional<TString>;
tr: TOptional<TString>;
ms: TOptional<TString>;
el: TOptional<TString>;
ar: TOptional<TString>;
az: TOptional<TString>;
bg: TOptional<TString>;
bn: TOptional<TString>;
bn_IN: TOptional<TString>;
"bn-IN": TOptional<TString>;
ca: TOptional<TString>;
ceb: TOptional<TString>;
ceb_PH: TOptional<TString>;
"ceb-PH": TOptional<TString>;
cs: TOptional<TString>;
da: TOptional<TString>;
de: TOptional<TString>;
en: TOptional<TString>;
en_GB: TOptional<TString>;
"en-GB": TOptional<TString>;
en_US: TOptional<TString>;
"en-US": TOptional<TString>;
es: TOptional<TString>;
es_MX: TOptional<TString>;
"es-MX": TOptional<TString>;
et: TOptional<TString>;
fi: TOptional<TString>;
fil: TOptional<TString>;
fil_PH: TOptional<TString>;
"fil-PH": TOptional<TString>;
fr: TOptional<TString>;
fr_CA: TOptional<TString>;
"fr-CA": TOptional<TString>;
ga: TOptional<TString>;
he: TOptional<TString>;
hi: TOptional<TString>;
hi_IN: TOptional<TString>;
"hi-IN": TOptional<TString>;
hu: TOptional<TString>;
hy: TOptional<TString>;
it: TOptional<TString>;
is: TOptional<TString>;
ja: TOptional<TString>;
jv: TOptional<TString>;
jv_ID: TOptional<TString>;
"jv-ID": TOptional<TString>;
ka_GE: TOptional<TString>;
"ka-GE": TOptional<TString>;
kk: TOptional<TString>;
km: TOptional<TString>;
km_KH: TOptional<TString>;
"km-KH": TOptional<TString>;
ko: TOptional<TString>;
lt: TOptional<TString>;
lv: TOptional<TString>;
my: TOptional<TString>;
my_MM: TOptional<TString>;
"my-MM": TOptional<TString>;
nl: TOptional<TString>;
no: TOptional<TString>;
pl: TOptional<TString>;
pt: TOptional<TString>;
pt_BR: TOptional<TString>;
"pt-BR": TOptional<TString>;
ro: TOptional<TString>;
ru: TOptional<TString>;
sk: TOptional<TString>;
sr_Cyrl: TOptional<TString>;
"sr-Cyrl": TOptional<TString>;
sr: TOptional<TString>;
sr_Latn: TOptional<TString>;
"sr-Latn": TOptional<TString>;
sl: TOptional<TString>;
sv: TOptional<TString>;
sq: TOptional<TString>;
sw: TOptional<TString>;
uk: TOptional<TString>;
ur: TOptional<TString>;
uz: TOptional<TString>;
vi: TOptional<TString>;
zh: TOptional<TString>;
zh_CN: TOptional<TString>;
"zh-CN": TOptional<TString>;
zh_HK: TOptional<TString>;
"zh-HK": TOptional<TString>;
}>;
}>>;
}>>;
countryForIp: TString;
credentials: TArray<TUnion<[TTransform<TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Id>;
country: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
}>>;
subType: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
}>>;
deviceRiskVendors: TOptional<TArray<TString>>;
acquisitionMode: TOptional<TString>;
}>]>, ({
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
} & {
type?: {
values: never[];
predefinedType: never;
} | undefined;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: import("../../../api/src/index.js").Category.Id;
}) | {
type: {
predefinedType: never;
values: "DIGITAL_IDENTITY"[];
};
capabilities?: {
id: `${string}-${string}-${string}-${string}-${string}`;
name: string;
}[] | undefined;
id: `${string}-${string}-${string}-${string}-${string}`;
country?: {
values: never[];
predefinedType: never;
} | undefined;
subType?: {
values: never[];
predefinedType: never;
} | undefined;
deviceRiskVendors?: string[] | undefined;
acquisitionMode?: string | undefined;
category: import("../../../api/src/index.js").Category.Id;
}>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Facemap>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"JUMIO_STANDARD" | "JUMIO_LIVENESS" | "JUMIO_PREMIUM">[]>>;
}>;
requiredParts: TOptional<TArray<TString>>;
deviceRiskVendors: TOptional<TArray<TString>>;
}>]>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Document>;
country: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
}>;
type: TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>;
deviceRiskVendors: TArray<TString>;
requiredParts: TArray<TString>;
}>]>, TIntersect<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
capabilities: TOptional<TArray<TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
name: TString;
}>>>;
}>, TObject<    {
category: TLiteral<import("../../../api/src/index.js").Category.Data>;
deviceRiskVendors: TArray<TString>;
type: TOptional<TObject<    {
predefinedType: TUnion<TLiteral<"DEFINED" | "RECOMMENDED" | "OPTIONAL">[]>;
values: TArray<TString>;
}>>;
requiredParts: TArray<TString>;
}>]>]>>;
maxFileUploadSize: TNumber;
merchantSettings: TOptional<TObject<    {
autoCapture: TOptional<TObject<    {
idEnabled: TOptional<TBoolean>;
docVEnabled: TOptional<TBoolean>;
newDesign: TOptional<TBoolean>;
}>>;
branding: TOptional<TObject<    {
primaryColor: TOptional<TString>;
accentColor: TOptional<TString>;
logoUri: TOptional<TString>;
}>>;
crossDevice: TOptional<TObject<    {
crossDeviceOption: TOptional<TUnion<TLiteral<"default" | "email_only" | "qr_only">[]>>;
enabled: TBoolean;
link: TOptional<TString>;
}>>;
crossDeviceOnly: TOptional<TBoolean>;
datadog: TOptional<TObject<    {
enabled: TBoolean;
merchantName: TString;
rules: TOptional<TArray<TIntersect<[TObject<    {
fieldNamePattern: TString;
valuePattern: TString;
}>, TObject<    {
sessionReplaySampleRate: TOptional<TNumber>;
sessionSampleRate: TOptional<TNumber>;
defaultPrivacyLevel: TOptional<TUnion<[TLiteral<"mask">, TLiteral<"mask-user-input">, TLiteral<"allow">]>>;
}>]>>>;
}>>;
idFlipAnimationDuration: TOptional<TNumber>;
integrityCheck: TOptional<TBoolean>;
isExplicitUploadEnabled: TOptional<TBoolean>;
isFileUploadEnabled: TOptional<TBoolean>;
jLiveEnabled: TOptional<TBoolean>;
jLiveFallbackPolicy: TUnion<TLiteral<"disabled" | "soft" | "strict">[]>;
jLiveIod: TOptional<TNumber>;
rescueSessionEnabled: TOptional<TBoolean>;
showBackNavigationButton: TOptional<TBoolean>;
showLanguageSelector: TOptional<TBoolean>;
skipDocTypeSelectionPage: TOptional<TBoolean>;
skipLivenessGuidancePage: TOptional<TBoolean>;
}>>;
redirects: TOptional<TObject<    {
success: TOptional<TString>;
error: TOptional<TString>;
}>>;
stateForIp: TString;
supportedCountries: TArray<TObject<    {
country: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
idTypes: TArray<TUnion<[TUnion<[TObject<    {
idType: TLiteral<"ID_CARD">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"DRIVING_LICENSE">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"PASSPORT">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"VISA">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>]>, TUnion<[TObject<    {
subType: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
file: TLiteral<"PDF">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"MASTERCARD">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"EIDAS">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"TRUST_CHECK">;
provider: TOptional<TString>;
logoUrl: TOptional<TString>;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>]>]>>;
}>>;
supportedDocumentTypes: TArray<TObject<    {
code: TString;
name: TString;
maxPages: TNumber;
translations: TOptional<TRecord<TString, TString>>;
}>>;
skipStartScreen: TOptional<TBoolean>;
timestamp: TString;
workflowDefinitionKey: TNumber;
}>;

export declare const TbSourceSchema: TUnion<TLiteral<"camera" | "upload" | "preview">[]>;

export declare const TbStepNavigationActionSchema: TUnion<TLiteral<"step-navigation-previous-step" | "step-navigation-next-step">[]>;

export declare const TbSupplementalImageClassifierSchema: TUnion<TLiteral<"FRONT_WITH_FLASH" | "ID_SEQUENCE" | "SELFIE_SEQUENCE">[]>;

export declare const TbSupportedCountrySchema: TObject<    {
country: TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>;
idTypes: TArray<TUnion<[TUnion<[TObject<    {
idType: TLiteral<"ID_CARD">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"DRIVING_LICENSE">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"PASSPORT">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>, TObject<    {
idType: TLiteral<"VISA">;
variants: TArray<TObject<    {
variant: TUnion<TLiteral<"PAPER" | "PLASTIC">[]>;
format: TOptional<TUnion<TLiteral<"ID1" | "ID2" | "ID3" | "NONE">[]>>;
parts: TArray<TObject<    {
side: TUnion<TLiteral<"FRONT" | "BACK">[]>;
}>>;
}>>;
}>]>, TUnion<[TObject<    {
subType: TLiteral<"DIGITAL_DRIVING_LICENSE_PDF">;
file: TLiteral<"PDF">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"MASTERCARD">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"EIDAS">;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>, TObject<    {
subType: TLiteral<"TRUST_CHECK">;
provider: TOptional<TString>;
logoUrl: TOptional<TString>;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>]>]>>;
}>;

export declare const TbSupportedDocumentTypeSchema: TObject<    {
code: TString;
name: TString;
maxPages: TNumber;
translations: TOptional<TRecord<TString, TString>>;
}>;

export declare const TbThumbnailSchema: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;

export declare const TbThumbnailStateBaseSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>;

export declare const TbThumbnailStateErrorSchema: TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>;

export declare const TbThumbnailStateNotStartedSchema: TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>;

export declare const TbThumbnailStateProgressSchema: TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>;

export declare const TbThumbnailStateSchema: TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"progress">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>]>;

export declare const TbThumbnailStateSuccessSchema: TObject<    {
state: TLiteral<"success">;
thumbnail: TObject<    {
base64: TString;
width: TNumber;
height: TNumber;
}>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
}>;

export declare const TbThumbnailStatusSchema: TUnion<TLiteral<"error" | "progress" | "not-started" | "success">[]>;

export declare const TbTrustCheckDigitalIdentitySchema: TObject<    {
subType: TLiteral<"TRUST_CHECK">;
provider: TOptional<TString>;
logoUrl: TOptional<TString>;
idType: TLiteral<"DIGITAL_IDENTITY">;
title: TString;
}>;

export declare const TbTrustCheckStatusSchema: TUnion<TLiteral<"FAILED" | "SUCCESS" | "NOT_AVAILABLE">[]>;

declare const TbUploadEventsSchema: TUnion<TLiteral<"filesuploadedraw" | "filesuploaded">[]>;

export declare const TbUploadStateErrorSchema: TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;

export declare const TbUploadStateNotStartedSchema: TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;

export declare const TbUploadStateProgressSchema: TObject<    {
state: TLiteral<"progress">;
progress: TOptional<TNumber>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;

export declare const TbUploadStateSchema: TUnion<[TObject<    {
state: TLiteral<"not-started">;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>, TObject<    {
state: TLiteral<"progress">;
progress: TOptional<TNumber>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>, TObject<    {
state: TLiteral<"error">;
error: TUnknown;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>, TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>]>;

export declare const TbUploadStateSuccessSchema: TObject<    {
state: TLiteral<"success">;
usabilityId: TString;
docvProcessed: TOptional<TBoolean>;
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
source: TUnion<TLiteral<"camera" | "upload">[]>;
category: TUnion<TLiteral<Category>[]>;
credentialId: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
blob: TUnsafe<Blob>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
idSubtype: TOptional<TUnion<TLiteral<"DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK">[]>>;
batchBytesToUpload: TNumber;
batchBytesUploaded: TNumber;
batchUploadProgress: TNumber;
}>;

export declare const TbUploadStatusSchema: TUnion<TLiteral<"error" | "progress" | "not-started" | "success">[]>;

export declare const TbUsabilityCheckRejectReasonCodeSchema: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;

export declare const TbUsabilityCheckStateErrorSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"error">;
error: TUnknown;
}>;

export declare const TbUsabilityCheckStateNotStartedSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"not-started">;
}>;

export declare const TbUsabilityCheckStateProgressSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"progress">;
}>;

export declare const TbUsabilityCheckStateSchema: TUnion<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"not-started">;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"progress">;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"error">;
error: TUnknown;
}>, TUnion<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"NOT_AVAILABLE">;
}>;
}>]>]>;

export declare const TbUsabilityCheckStateSuccessNotAvailableSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"NOT_AVAILABLE">;
}>;
}>;

export declare const TbUsabilityCheckStateSuccessPassOrRejectSchema: TUnion<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>]>;

export declare const TbUsabilityCheckStateSuccessPassSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>;

export declare const TbUsabilityCheckStateSuccessRejectSchema: TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>;

export declare const TbUsabilityCheckStateSuccessSchema: TUnion<[TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;
}>, TObject<    {
id: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;
state: TLiteral<"success">;
result: TObject<    {
decisionType: TLiteral<"NOT_AVAILABLE">;
}>;
}>]>;

export declare const TbUsabilityCheckStatusSchema: TUnion<TLiteral<"error" | "progress" | "not-started" | "success">[]>;

export declare const TbUsabilityDecisionNotAvailableSchema: TObject<    {
decisionType: TLiteral<"NOT_AVAILABLE">;
}>;

export declare const TbUsabilityDecisionPassOrRejectSchema: TUnion<[TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>, TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>]>;

export declare const TbUsabilityDecisionPassSchema: TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;

export declare const TbUsabilityDecisionRejectReasonSchema: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;

export declare const TbUsabilityDecisionRejectSchema: TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>;

export declare const TbUsabilityDecisionSchema: TUnion<[TObject<    {
decisionType: TLiteral<"PASS">;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>, TObject<    {
decisionType: TLiteral<"REJECT">;
rejectReason: TObject<    {
reasonCode: TUnion<TLiteral<"0" | "100" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "118" | "119" | "200" | "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "201" | "202" | "206" | "214" | "300" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "401" | "501">[]>;
}>;
extractedData: TOptional<TObject<    {
address: TOptional<TString>;
city: TOptional<TString>;
country: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
dateOfBirth: TOptional<TString>;
documentNumber: TOptional<TString>;
expiryDate: TOptional<TString>;
firstName: TOptional<TString>;
gender: TOptional<TString>;
idSubType: TOptional<TString>;
idType: TOptional<TUnion<TLiteral<"PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY">[]>>;
issuingCountry: TOptional<TUnion<TLiteral<"ABW" | "AFG" | "AGO" | "AIA" | "ALA" | "ALB" | "AND" | "ARE" | "ARG" | "ARM" | "ASM" | "ATA" | "ATF" | "ATG" | "AUS" | "AUT" | "AZE" | "BDI" | "BEL" | "BEN" | "BES" | "BFA" | "BGD" | "BGR" | "BHR" | "BHS" | "BIH" | "BLM" | "BLR" | "BLZ" | "BMU" | "BOL" | "BRA" | "BRB" | "BRN" | "BTN" | "BVT" | "BWA" | "CAF" | "CAN" | "CCK" | "CHE" | "CHL" | "CHN" | "CIV" | "CMR" | "COD" | "COG" | "COK" | "COL" | "COM" | "CPV" | "CRI" | "CUB" | "CUW" | "CXR" | "CYM" | "CYP" | "CZE" | "DEU" | "DJI" | "DMA" | "DNK" | "DOM" | "DZA" | "ECU" | "EGY" | "ERI" | "ESH" | "ESP" | "EST" | "ETH" | "FIN" | "FJI" | "FLK" | "FRA" | "FRO" | "FSM" | "GAB" | "GBR" | "GEO" | "GGY" | "GHA" | "GIB" | "GIN" | "GLP" | "GMB" | "GNB" | "GNQ" | "GRC" | "GRD" | "GRL" | "GTM" | "GUF" | "GUM" | "GUY" | "HKG" | "HMD" | "HND" | "HRV" | "HTI" | "HUN" | "IDN" | "IMN" | "IND" | "IOT" | "IRL" | "IRN" | "IRQ" | "ISL" | "ISR" | "ITA" | "JAM" | "JEY" | "JOR" | "JPN" | "KAZ" | "KEN" | "KGZ" | "KHM" | "KIR" | "KNA" | "KOR" | "KWT" | "LAO" | "LBN" | "LBR" | "LBY" | "LCA" | "LIE" | "LKA" | "LSO" | "LTU" | "LUX" | "LVA" | "MAC" | "MAF" | "MAR" | "MCO" | "MDA" | "MDG" | "MDV" | "MEX" | "MHL" | "MKD" | "MLI" | "MLT" | "MMR" | "MNE" | "MNG" | "MNP" | "MOZ" | "MRT" | "MSR" | "MTQ" | "MUS" | "MWI" | "MYS" | "MYT" | "NAM" | "NCL" | "NER" | "NFK" | "NGA" | "NIC" | "NIU" | "NLD" | "NOR" | "NPL" | "NRU" | "NZL" | "OMN" | "PAK" | "PAN" | "PCN" | "PER" | "PHL" | "PLW" | "PNG" | "POL" | "PRI" | "PRK" | "PRT" | "PRY" | "PSE" | "PYF" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "SAU" | "SDN" | "SEN" | "SGP" | "SGS" | "SHN" | "SJM" | "SLB" | "SLE" | "SLV" | "SMR" | "SOM" | "SPM" | "SRB" | "SSD" | "STP" | "SUR" | "SVK" | "SVN" | "SWE" | "SWZ" | "SXM" | "SYC" | "SYR" | "TCA" | "TCD" | "TGO" | "THA" | "TJK" | "TKL" | "TKM" | "TLS" | "TON" | "TTO" | "TUN" | "TUR" | "TUV" | "TWN" | "TZA" | "UGA" | "UKR" | "UMI" | "URY" | "USA" | "UZB" | "VAT" | "VCT" | "VEN" | "VGB" | "VIR" | "VNM" | "VUT" | "WLF" | "WSM" | "XKX" | "YEM" | "ZAF" | "ZMB" | "ZWE">[]>>;
issuingDate: TOptional<TString>;
lastName: TOptional<TString>;
mrzLine1: TOptional<TString>;
mrzLine2: TOptional<TString>;
mrzLine3: TOptional<TString>;
nationality: TOptional<TString>;
personalNumber: TOptional<TString>;
placeOfBirth: TOptional<TString>;
postalCode: TOptional<TString>;
rawBarcodeData: TOptional<TString>;
subdivision: TOptional<TString>;
}>>;
classifier: TUnion<[...TLiteral<"FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB">[], TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TTemplateLiteral<[TLiteral<"ID_SEQUENCE_">, TUnion<TLiteral<"FRONTSIDE" | "BACKSIDE">[]>, TLiteral<"_">, TNumber]>, TTemplateLiteral<[TLiteral<"SELFIE_SEQUENCE_">, TNumber]>, TTemplateLiteral<[TLiteral<"LIVENESS_SERIES_">, TNumber]>, TTemplateLiteral<[TLiteral<"JUMIO_LIVENESS_">, TNumber]>]>;
}>, TObject<    {
decisionType: TLiteral<"NOT_AVAILABLE">;
}>]>;

export declare const TbUsabilityDecisionTypeSchema: TUnion<TLiteral<"NOT_AVAILABLE" | "PASS" | "REJECT">[]>;

export declare const TbUuidSchema: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;

export declare const TbUuidWithDefaultSchema: TTemplateLiteral<[TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString, TLiteral<"-">, TString]>;

export declare const TbVideoErrorSchema: TObject<    {
name: TString;
message: TString;
}>;

export declare const TbVideoSourceTypeSchema: TUnion<TLiteral<"camera" | "file">[]>;

export declare const TbVirtualStepSchema: TUnion<TLiteral<VirtualStep>[]>;

export declare type Teardown = () => void;

export declare type Thumbnail = Static<typeof TbThumbnailSchema>;

export declare type ThumbnailState = Static<typeof TbThumbnailStateSchema>;

export declare type ThumbnailStatus = Static<typeof TbThumbnailStatusSchema>;

export declare const ThumbnailStatusEnum: {
    readonly NotStarted: "not-started";
    readonly Progress: "progress";
    readonly Success: "success";
    readonly Error: "error";
};

declare interface TimestampLike {
    timestamp: string;
}

declare type ToBlobSupportedImageType = 'image/jpeg' | 'image/png' | 'image/webp';

export declare const toggleCaptureHintsVisibility: () => void;

export declare interface Token<TExpiration = Date> extends Record<string, unknown> {
    exAt: TExpiration;
    accId: UUID;
    aId: UUID;
    wfeId: UUID;
    cRef: string;
    cId: UUID;
}

export declare interface TokenManager {
    readonly token$: Observable<TokenState>;
    setToken(token: string): void;
    getToken(): TokenState;
}

export declare interface TokenManagerController {
    getToken(): Promise<TokenState>;
    getToken$(): Observable<TokenState>;
    setToken(token: string): void;
}

export declare interface TokenState<TExpiration = Date> {
    parsedToken?: Token<TExpiration>;
    token: string;
    transactionId: UUID;
    tokenExpired: boolean;
}

export declare class TopMessageContainerComponent extends BaseComponent {
    static styles: CSSResult[];
    render(): TemplateResult_2<1>;
}

export declare const transactionFinished: ErrorCase;

export declare const transformMediaDeviceInfo: (device: MediaDeviceInfo) => JMediaDeviceInfo;

export declare interface Transport {
    getSettings$(params: SettingsRequest): Observable<unknown>;
    sendAnalyticsEvent$(params: SendEventRequest): Observable<object>;
    sendReportingEvent$(params: SendEventRequest): Observable<object>;
    finalize$(): Observable<FinalizeResponse>;
    checkUsability$(params: CheckUsabilityParams): Observable<UsabilityResult>;
    checkEidas$(): Observable<EidasResult>;
    extractData$(): Observable<ExtractedDataResponse>;
    uploadData$(params: UploadDataParams): Observable<UploadResponse>;
    provideConsents$(consents: ProvideConsentRequest[]): Observable<object>;
    getAcquisitionStatus$(): Observable<AcquisitionStatusResponse>;
    sendCrossDeviceEmail$(emailRequest: EmailRequest): Observable<EmailResponse>;
    getFilePart$(params: GetFilePartParams): Observable<unknown>;
    getImageSignature$(params: IntegrityRequest): Observable<IntegrityResponse>;
    updateMetadata$(acquisitionId: UUID, credentialId: UUID, params: UpdateMetadataParams): Observable<object>;
    eidasUrl$(locale: Locale): Observable<EidasUrlResponse>;
    lookupResult$(lookupId: UUID): Observable<LookupResponse>;
    getTrustCheckStatus$(sessionId: UUID): Observable<TrustCheckResult>;
    trustCheckUrl$(locale: Locale, provider: string, country: CountryCode): Observable<TrustCheckUrlResponse>;
}

export declare interface TransportController {
    getSettings(params: SettingsRequest): Promise<unknown>;
    sendAnalyticsEvent(params: SendEventRequest): Promise<object>;
    sendReportingEvent(params: SendEventRequest): Promise<object>;
    finalize(): Promise<FinalizeResponse>;
    checkUsability(params: CheckUsabilityParams): Promise<UsabilityResult>;
    extractData(): Promise<ExtractedDataResponse>;
    uploadData(params: UploadDataParams): Promise<UploadResponse>;
    getAcquisitionStatus(): Promise<AcquisitionStatusResponse>;
}

export declare type TrustCheckDigitalIdentity = Static<typeof TbTrustCheckDigitalIdentitySchema>;

export declare const trustCheckFailedEvent: EventDispatcher<EventMetadata>;

export declare interface TrustCheckResult {
    status: TrustCheckStatus;
}

export declare type TrustCheckStatus = Static<typeof TbTrustCheckStatusSchema>;

export declare const TrustCheckStatusEnum: {
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly NOT_AVAILABLE: "NOT_AVAILABLE";
};

export declare const trustCheckStatusFetchErrorEvent: EventDispatcher<    {
name?: string;
message?: string;
stack?: string;
}>;

export declare interface TrustCheckStoreState {
    trustCheckIsOutOfAttempts?: Record<string, boolean>;
}

export declare const trustCheckSuccessEvent: EventDispatcher<EventMetadata>;

export declare const trustCheckUrlFetchErrorEvent: EventDispatcher<    {
name?: string;
message?: string;
stack?: string;
}>;

export declare const trustCheckUrlFetchEvent: EventDispatcher<EventMetadata>;

export declare interface TrustCheckUrlResponse {
    url: string;
}

export declare interface UIState {
    showBackButtonMerchantSetting?: boolean;
    showBackButtonAttribute?: boolean;
    showLocaleSelectorMerchantSetting?: boolean;
    showLocaleSelectorAttribute?: boolean;
}

export declare const uncaughtErrorEvent: EventDispatcher<    {
name: string;
message: string;
stack?: string;
}>;

export declare const unhandledrejectionEvent: EventDispatcher<    {
name: string;
message: string;
stack?: string;
}>;

export declare const unlockOrientation: () => void;

declare type UnwrapObservable<T> = T extends Observable<infer R> ? R : never;

export declare const updateAutocaptureRescueCaptureState$: () => Observable<true>;

export declare const updateConsent: (item: ConsentData) => void;

export declare const updateDeviceList$: () => Observable<JMediaDeviceInfo[]>;

export declare interface UpdateMetadataParams {
    countrySelection?: string;
    credentialFileGuidSelection?: string[];
    typeSelection?: string;
}

export declare const updateSettings: (partialSettings: Partial<SettingsRaw>) => void;

export declare interface UpdateStateParams {
    data: BackupEntryDescriptor;
    unused?: string;
    url: URL | string | null;
}

export declare const updateUiState: (params: Partial<UIState>) => void;

export declare const updateWorkflowState: (params: Partial<WorkflowState>) => void;

export declare interface UploadDataParams {
    credentialUUID: UUID;
    params: UploadRequest;
    onProgress?: (event: ProgressEvent) => void;
}

export declare class UploadErrorMessageComponent extends BaseComponent {
    static styles: CSSResult[];
    message: string;
    render(): TemplateResult<1>;
}

declare type UploadErrorMessageMap = Partial<Record<Classifier, FilePickerError | undefined>>;

declare type UploadEvents = Static<typeof TbUploadEventsSchema>;

declare interface UploadImageParams {
    withFlash?: CameraCapturingEngineGetBlobResultWithClassifier;
    withoutFlash: CameraCapturingEngineGetBlobResultWithClassifier;
    captureRequest: CaptureRequest;
    supplementalImages: MultipartFile[];
}

export declare interface UploadRequest {
    consents?: MultipartConsent[];
    deviceRisks?: DeviceRisk[];
    uploadFilesMetadata?: MultipartFiles;
}

export declare class UploadRequestEvent extends CustomEvent<UploadRequestWithCaptureType> {
    constructor(request: UploadRequestWithCaptureType);
}

export declare interface UploadRequestWithCaptureType extends UploadRequest {
    captureType: LivenessCaptureTypes;
}

export declare interface UploadResponse {
    usabilityResultKeys: FileStoreRecord;
    documentResult?: DocumentResultResponse;
}

export declare type UploadState = Static<typeof TbUploadStateSchema>;

export declare type UploadStateError = Static<typeof TbUploadStateErrorSchema>;

export declare type UploadStateNotStarted = Static<typeof TbUploadStateNotStartedSchema>;

export declare type UploadStateProgress = Static<typeof TbUploadStateProgressSchema>;

export declare type UploadStateSuccess = Static<typeof TbUploadStateSuccessSchema>;

export declare type UploadStatus = Static<typeof TbUploadStatusSchema>;

export declare const UploadStatusEnum: {
    readonly NotStarted: "not-started";
    readonly Progress: "progress";
    readonly Error: "error";
    readonly Success: "success";
};

export declare type UploadTypeJumioLiveness = 'JUMIO_LIVENESS_BLOB' | `JUMIO_LIVENESS_${number}`;

export declare type UploadTypeLivenessSeries = `LIVENESS_SERIES_${number}`;

export declare const upsertFileUpload: (data: Partial<UploadState> & Pick<UploadState, "id">) => Partial<{
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "not-started";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
} | {
    progress?: number | undefined;
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "progress";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
} | {
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    error: unknown;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "error";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
} | {
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    docvProcessed?: boolean | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "success";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
    usabilityId: string;
}> & Pick<{
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "not-started";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
} | {
    progress?: number | undefined;
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "progress";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
} | {
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    error: unknown;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "error";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
} | {
    idType?: "PASSPORT" | "ID_CARD" | "DRIVING_LICENSE" | "VISA" | "DIGITAL_IDENTITY" | undefined;
    idSubtype?: "DIGITAL_DRIVING_LICENSE_PDF" | "MASTERCARD" | "EIDAS" | "TRUST_CHECK" | undefined;
    docvProcessed?: boolean | undefined;
    id: `${string}-${string}-${string}-${string}-${string}`;
    source: "camera" | "upload";
    state: "success";
    classifier: "FRONTSIDE" | "BACKSIDE" | "CNH_PDF" | "DOCUMENT" | "FACE" | "DATA" | "FRONT_WITH_FLASH" | "JUMIO_LIVENESS_BLOB" | `ID_SEQUENCE_FRONTSIDE_${number}` | `ID_SEQUENCE_BACKSIDE_${number}` | `SELFIE_SEQUENCE_${number}` | `LIVENESS_SERIES_${number}` | `JUMIO_LIVENESS_${number}`;
    category: Category;
    credentialId: `${string}-${string}-${string}-${string}-${string}`;
    blob: Blob;
    batchBytesToUpload: number;
    batchBytesUploaded: number;
    batchUploadProgress: number;
    usabilityId: string;
}, "id">;

export declare const upsertThumbnail: (data: ThumbnailState) => void;

export declare const upsertUsabilityCheck: (data: UsabilityCheckState) => void;

export declare class UsabilityCheckComponent extends BaseComponent {
    static styles: CSSResult[];
    itemElements: HTMLElement[];
    buttonElements: HTMLElement[];
    render(): TemplateResult<1>;
}

export declare type UsabilityCheckRejectReasonCode = Static<typeof TbUsabilityCheckRejectReasonCodeSchema>;

export declare type UsabilityCheckState<TUsabilityCheckStatus extends UsabilityCheckStatus = UsabilityCheckStatus, TDecisionType extends UsabilityDecisionType = UsabilityDecisionType> = UsabilityCheckStateMap<TDecisionType>[TUsabilityCheckStatus];

export declare type UsabilityCheckStateError = Static<typeof TbUsabilityCheckStateErrorSchema>;

export declare interface UsabilityCheckStateMap<TDecisionType extends UsabilityDecisionType = UsabilityDecisionType> {
    [UsabilityCheckStatusEnum.NotStarted]: UsabilityCheckStateNotStarted;
    [UsabilityCheckStatusEnum.Progress]: UsabilityCheckStateProgress;
    [UsabilityCheckStatusEnum.Error]: UsabilityCheckStateError;
    [UsabilityCheckStatusEnum.Success]: UsabilityCheckStateSuccessMap[TDecisionType];
}

export declare type UsabilityCheckStateNotStarted = Static<typeof TbUsabilityCheckStateNotStartedSchema>;

export declare type UsabilityCheckStateProgress = Static<typeof TbUsabilityCheckStateProgressSchema>;

export declare interface UsabilityCheckStateSuccessMap {
    [UsabilityDecisionTypeEnum.PASS]: UsabilityCheckStateSuccessPass;
    [UsabilityDecisionTypeEnum.REJECT]: UsabilityCheckStateSuccessReject;
    [UsabilityDecisionTypeEnum.NOT_AVAILABLE]: UsabilityCheckStateSuccessNotAvailable;
}

export declare type UsabilityCheckStateSuccessNotAvailable = Static<typeof TbUsabilityCheckStateSuccessNotAvailableSchema>;

export declare type UsabilityCheckStateSuccessPass = Static<typeof TbUsabilityCheckStateSuccessPassSchema>;

export declare type UsabilityCheckStateSuccessReject = Static<typeof TbUsabilityCheckStateSuccessRejectSchema>;

export declare type UsabilityCheckStatus = Static<typeof TbUsabilityCheckStatusSchema>;

export declare const UsabilityCheckStatusEnum: {
    readonly NotStarted: "not-started";
    readonly Progress: "progress";
    readonly Success: "success";
    readonly Error: "error";
};

export declare type UsabilityDecision = Static<typeof TbUsabilityDecisionSchema>;

export declare type UsabilityDecisionType = Static<typeof TbUsabilityDecisionTypeSchema>;

export declare const UsabilityDecisionTypeEnum: {
    readonly PASS: "PASS";
    readonly REJECT: "REJECT";
    readonly NOT_AVAILABLE: "NOT_AVAILABLE";
};

export declare type UsabilityResult<T extends UsabilityDecisionType = UsabilityDecisionType> = UsabilityResultMap[T];

export declare interface UsabilityResultMap {
    [UsabilityDecisionTypeEnum.PASS]: Static<typeof TbUsabilityDecisionPassSchema>;
    [UsabilityDecisionTypeEnum.REJECT]: Static<typeof TbUsabilityDecisionRejectSchema>;
    [UsabilityDecisionTypeEnum.NOT_AVAILABLE]: Static<typeof TbUsabilityDecisionNotAvailableSchema>;
}

export declare interface UsedCaptureTypes {
    livenessCaptureType?: LivenessCaptureTypes;
    idCaptureType?: IdCaptureTypes;
    usedAllCaptureTypes: (IdCaptureTypes | LivenessCaptureTypes)[];
}

export declare const usedCaptureTypesEvent: EventDispatcher<    {
livenessCaptureType?: LivenessCaptureTypes;
idCaptureType?: IdCaptureTypes;
xDeviceJourney: boolean;
usedAllCaptureTypes: (IdCaptureTypes | LivenessCaptureTypes)[];
}>;

export declare type UUID = Static<typeof TbUuidSchema>;

declare enum UXCameraCommand {
    LockExposureAndWhiteBalance = "lock_exposure_and_white_balance",
    UnlockExposureAndWhiteBalance = "unlock_exposure_and_white_balance"
}

declare enum UXDisplayMessage {
    FaceHoldStill = "face_hold_still",
    FaceHoldStillInitial = "face_hold_still_initial",
    FaceKeepCenterSevere = "face_keep_center_severe",
    FaceMoveAway = "face_move_away",
    FaceMoveCloser = "face_move_closer",
    FaceNoneDetected = "face_none_detected",
    FaceNotUpright = "face_not_upright",
    FaceStopMovement = "face_stop_movement",
    FaceTiltDown = "face_tilt_down",
    FaceTiltLeft = "face_tilt_left",
    FaceTiltRight = "face_tilt_right",
    FaceTiltUp = "face_tilt_up",
    Finish = "finish",
    KeepFaceCenter = "face_keep_center",
    MoreCapturesNeeded = "more_captures_needed",
    Start = "start"
}

declare enum UXUICommand {
    HintMoveAway = "hint_move_away",
    HintMoveCloser = "hint_move_closer"
}

export declare type VideoError = Static<typeof TbVideoErrorSchema>;

export declare interface VideoLoadingParams {
    videoElement: HTMLVideoElement;
    cancelNotifier$: Observable<void>;
    timeoutMs?: number;
}

export declare const videoPlayThrows: EventDispatcher<    {
name: string;
message: string;
stack?: string;
state: unknown;
}>;

export declare interface VideoSizeInfo {
    streamWidth: number;
    streamHeight: number;
    streamAspectRatio: number;
    elementWidth: number;
    elementHeight: number;
    elementAspectRatio: number;
}

export declare type VideoSource = VideoSourceCamera | VideoSourceFile;

export declare interface VideoSourceCamera {
    type: typeof VideoSourceTypeEnum.Camera;
    deviceId: string;
    source: MediaStream;
    track: MediaStreamVideoTrack;
}

export declare interface VideoSourceFile {
    type: typeof VideoSourceTypeEnum.File;
    device: JMediaDeviceInfo;
    deviceId: string;
    track: ActiveTrackState;
    url: string;
}

export declare type VideoSourceType = Static<typeof TbVideoSourceTypeSchema>;

export declare const VideoSourceTypeEnum: {
    readonly Camera: "camera";
    readonly File: "file";
};

export declare type VideoTickCallback = (params: VideoTickCallbackParams) => Promise<void>;

export declare interface VideoTickCallbackParams {
    videoElement: HTMLVideoElement;
    isFirstFrame: boolean;
    performanceNow: DOMHighResTimeStamp;
    dateNowHighResolution: number;
    dateNow: number;
    frameId: number;
    fps?: number;
}

export declare enum VirtualStep {
    Setup = "setup",
    Start = "start",
    Finish = "finish"
}

export declare const visibleFaceFinderConfiguration: Record<LivenessFaceFinderDistance, LivenessFaceFinder>;

export declare class WatermarkComponent extends BaseComponent {
    #private;
    static styles: CSSResult[];
    branding: string;
    poweredBy: string;
    version: string;
    termsOfUse: {
        text: string;
        link: string;
    } | undefined;
    poweredByVisible: boolean;
    render(): TemplateResult<1>;
}

export declare const withMetadata: <M extends EventMetadata = EventMetadata>() => M;

declare interface WorkerAvailability {
    acceptableEvents: string[];
    isReady: boolean;
}

export declare interface Workflow {
    extractData$(): Observable<ExtractedDataResponse>;
    finalize$(): Observable<FinalizeResponse>;
    checkAcquisitionStatus$(): Observable<AcquisitionStatusResponse>;
    checkAcquisitionStatusPolling$(interval?: number): Observable<AcquisitionStatusResponse>;
    goToPreviousStep(): void;
    goToNextStep(): void;
    getStepById<T extends Category | VirtualStep>(category: T, credentialId?: UUID): WorkflowStep<T>;
    getWorkflowState(): WorkflowState;
    setWorkflowState(params: Partial<WorkflowState>): void;
}

export declare interface WorkflowConfiguration {
    readonly credentials$: Observable<JCredential[]>;
    readonly settings$: Observable<Settings>;
    getSettings(): Settings;
    fetchSettings$(requestParams: SettingsRequest): Observable<SettingsRaw>;
}

export declare interface WorkflowConfigurationController {
    getSettings(): Settings;
    selectSettings$(): Observable<Settings>;
    selectSettingsAsync(): Promise<Settings>;
    fetchSettings$(requestParams?: SettingsRequest): Observable<SettingsRaw>;
    fetchSettingsAsync(requestParams?: SettingsRequest): Promise<SettingsRaw>;
}

export declare interface WorkflowConsent {
    sendConsentData$(): Observable<object>;
    updateConsentStatus(consentData: ConsentData): void;
    areAllActiveConsentsGiven$(): Observable<boolean>;
    isConsentGivenSent$(): Observable<boolean>;
    selectAllConsents$(): Observable<ConsentItem[]>;
    getLocalizedTermsOfUse$(locale: Locale): Observable<LocalizedTermsOfUse | undefined>;
}

export declare interface WorkflowConsentController {
    sendConsentData(): Promise<object>;
    sendConsentData$(): Observable<object>;
    selectAllConsents$(): Observable<ConsentItem[]>;
    selectAllConsents(): Promise<ConsentItem[]>;
    updateConsentStatus(consentData: ConsentData): void;
    areAllActiveConsentsGiven$(): Observable<boolean>;
    isConsentGivenSent$(): Observable<boolean>;
    isConsentGivenSent(): Promise<boolean>;
    areAllActiveConsentsGiven(): Promise<boolean>;
    getLocalizedTermsOfUse$(locale: Locale): Observable<LocalizedTermsOfUse | undefined>;
    getLocalizedTermsOfUse(locale: Locale): Promise<LocalizedTermsOfUse | undefined>;
}

export declare interface WorkflowController {
    getConsentController(): WorkflowConsentController;
    getEmailController(): WorkflowEmailController;
    getEidasController(): WorkflowEidasController;
    getConfiguration(): WorkflowConfigurationController;
    selectStepChange$(): Observable<StepChangeParams>;
    onStepChange(callback: StepChangeCallback): Teardown;
    getControllerById<T extends Category | VirtualStep>(category: T, credentialId?: UUID): WorkflowStepController<T>;
    extractData$(): Observable<ExtractedDataResponse>;
    extractDataAsync(): Promise<ExtractedDataResponse>;
    finalize$(): Observable<FinalizeResponse>;
    finalizeAsync(): Promise<FinalizeResponse>;
    checkAcquisitionStatus$(): Observable<AcquisitionStatusResponse>;
    checkAcquisitionStatusAsync(): Promise<AcquisitionStatusResponse>;
    checkAcquisitionStatusPolling$(interval?: number): Observable<AcquisitionStatusResponse>;
    goToPreviousStep(): void;
    goToNextStep(): void;
    getWorkflowState(): WorkflowState;
    setWorkflowState(params: Partial<WorkflowState>): void;
    getLoggerManager(): LoggerManager;
    getTokenManager(): TokenManagerController;
    getTransport(): TransportController;
    getTrustCheckController(): WorkflowTrustCheckController;
    getLookup(): WorkflowLookupController;
}

export declare interface WorkflowEidas {
    getUrl$(locale: Locale): Observable<EidasUrlResponse>;
    checkEidas$(): Observable<EidasResult>;
}

export declare interface WorkflowEidasController {
    getEidasUrl$(locale: Locale): Observable<EidasUrlResponse>;
    getEidasUrlAsync(locale: Locale): Promise<EidasUrlResponse>;
    checkEidas$(): Observable<EidasResult>;
    checkEidasAsync(): Promise<EidasResult>;
}

export declare interface WorkflowEmail {
    sendEmail$(emailRequest: EmailRequest): Observable<EmailResponse>;
}

export declare interface WorkflowEmailController {
    sendEmail$(emailRequest: EmailRequest): Observable<EmailResponse>;
    sendEmailAsync(emailRequest: EmailRequest): Promise<EmailResponse>;
}

export declare type WorkflowEventBody<T extends WorkflowEventType> = WorkflowEventMetadata & {
    type: T;
};

export declare interface WorkflowEventMetadata {
    locale?: Locale;
    accountId?: string;
    workflowId?: string;
    workflowExecutionId?: string;
}

export declare type WorkflowEventType = 'workflow:failed' | 'workflow:retry' | 'workflow:start' | 'workflow:success';

export declare type WorkflowFailedCustomEvent = ReturnType<typeof createWorkflowFailedEvent>;

export declare class WorkflowInitiateEvent extends CustomEvent<WorkflowInitiateEventParams> {
    constructor(detail: WorkflowInitiateEventParams);
}

export declare type WorkflowInitiateEventParams = Pick<WorkflowState, 'baseUrl' | 'linked' | 'locale' | 'sessionUrl' | 'token'>;

export declare interface WorkflowLookupController {
    lookupResult$(lookupId: UUID): Observable<LookupResponse>;
}

export declare const workflowRestarted: EventDispatcher<EventMetadata>;

export declare type WorkflowRetryCustomEvent = ReturnType<typeof createWorkflowRetryEvent>;

declare interface WorkflowSetupParameters {
    sessionUrl: string;
    baseUrl: string;
    token: string;
    locale: Locale;
    finalized: boolean;
    consentGivenSent: boolean;
    linked: boolean;
    acquisitionStatus: AcquisitionStatus;
    acquisitionPolling: boolean;
    visitedScreens: string[];
}

export declare type WorkflowSetupParametersMandatory = Pick<WorkflowState, 'baseUrl' | 'locale' | 'token' | 'transactionId'>;

export declare type WorkflowStartCustomEvent = ReturnType<typeof createWorkflowStartEvent>;

export declare type WorkflowState<TExpiration = Date> = NavigationStep & TokenState<TExpiration> & WorkflowSetupParameters;

export declare type WorkflowStep<T extends CredentialStep = CredentialStep> = WorkflowStepMap[T];

export declare interface WorkflowStepBaseController<TCategoryType extends CredentialStep> {
    readonly category: TCategoryType;
}

export declare interface WorkflowStepBaseLogic<TCategoryType extends Category> {
    readonly category: TCategoryType;
}

export declare type WorkflowStepController<T extends CredentialStep> = WorkflowStepControllerMap[T];

export declare interface WorkflowStepControllerMap {
    [VirtualStep.Setup]: WorkflowStepSetupController;
    [VirtualStep.Start]: WorkflowStepStartController;
    [Category.Id]: WorkflowStepIdController;
    [Category.Facemap]: WorkflowStepFacemapController;
    [Category.Document]: WorkflowStepDocumentController;
    [Category.Data]: WorkflowStepDataController;
    [VirtualStep.Finish]: WorkflowStepFinishController;
}

declare interface WorkflowStepControllerProvider<TWorkflowStepController> {
    readonly workflowStepController: TWorkflowStepController;
}

export declare interface WorkflowStepCredentialController<TCategoryType extends Category> extends WorkflowStepBaseController<TCategoryType> {
    getCredential(): JCredential<TCategoryType>;
    selectCredential$(): Observable<JCredential<TCategoryType>>;
    getCredentialAsync(): Promise<JCredential<TCategoryType>>;
    checkUsability$(params: CheckUsabilityParamsWithId): Observable<UsabilityResult>;
    checkUsabilityAsync(params: CheckUsabilityParamsWithId): Promise<UsabilityResult>;
    uploadData$(params: UploadRequest): Observable<UploadResponse>;
    uploadDataAsync(params: UploadRequest): Promise<UploadResponse>;
}

export declare interface WorkflowStepCredentialLogic<TCategoryType extends Category> extends WorkflowStepBaseLogic<TCategoryType> {
    getCredential(): JCredential<TCategoryType>;
    selectCredential$(): Observable<JCredential<TCategoryType>>;
    checkUsability$(params: CheckUsabilityParamsWithId): Observable<UsabilityResult>;
    uploadData$(params: UploadRequest): Observable<UploadResponse>;
}

export declare interface WorkflowStepData extends WorkflowStepCredentialLogic<Category.Data> {
    isIovation(): boolean;
}

export declare interface WorkflowStepDataController extends WorkflowStepCredentialController<Category.Data> {
    isIovation(): boolean;
}

export declare interface WorkflowStepDocument extends WorkflowStepCredentialLogic<Category.Document> {
    getFilePart$(partId: UUID): Observable<unknown>;
    selectStoredParts$(): Observable<FileStoreEntity[]>;
    selectMaxFileUploadSize$(): Observable<number>;
    deletePart(id: UUID): void;
    updateMetadataWithPageSelection$(): Observable<object>;
}

export declare interface WorkflowStepDocumentController extends WorkflowStepCredentialController<Category.Document> {
    selectStoredParts$(): Observable<FileStoreEntity[]>;
    selectDocument$(): Observable<SupportedDocumentType | undefined>;
    selectMaxFileUploadSize$(): Observable<number>;
    selectUploadedPdfFile$(): Observable<Blob | undefined>;
    deletePart(id: UUID): void;
    updateMetadataWithPageSelection$(): Observable<object>;
}

export declare interface WorkflowStepFacemap extends WorkflowStepCredentialLogic<Category.Facemap> {
    selectVerificationMethods$(): Observable<FacemapVerificationMethod[]>;
    setJLiveManualCaptureFallbackReason(reason: ManualCaptureFallbackReason | undefined): void;
    selectJLiveManualCaptureFallbackReason$(): Observable<ManualCaptureFallbackReason | undefined>;
    selectJLiveFallbackError$(): Observable<JLiveFallbackError | undefined>;
    resetJLiveFallbackError(): void;
    setActiveFaceVerificationMethod: (activeVerificationMethod: FacemapVerificationMethod | undefined) => void;
    getActiveFaceVerificationMethod: () => FacemapVerificationMethod | undefined;
    selectActiveFaceVerificationMethod$: () => Observable<FacemapVerificationMethod | undefined>;
    selectLivenessState$: () => Observable<CredentialFacemapState & LivenessState>;
    setLivenessVisibleFaceFinder: (oval: LivenessRefDistance) => void;
    selectLivenessVisibleFaceFinder$: () => Observable<LivenessRefDistance>;
    selectLivenessAttempt$: () => Observable<number>;
    selectLivenessFeedbackMessage$: () => Observable<UXDisplayMessage>;
    selectLivenessScanning$: () => Observable<boolean>;
    selectLivenessBackgroundColor$: () => Observable<string | undefined>;
    setLivenessStoreToNextAttempt: () => void;
    setLivenessStoreProgress: (progress: string) => void;
    setLivenessStorePhotinusColor: (photinusColor: string | undefined) => void;
    setLivenessStoreDisplayMessage: (displayMessage: UXDisplayMessage) => void;
    setLivenessStoreCameraCommand: (cameraCommand: UXCameraCommand | undefined) => void;
    setLivenessStoreUiCommand: (uiCommand: UXUICommand | undefined) => void;
    selectLivenessProgress$: () => Observable<[number, number]>;
    reset: () => void;
}

export declare interface WorkflowStepFacemapController extends WorkflowStepCredentialController<Category.Facemap> {
    selectVerificationMethods$(): Observable<FacemapVerificationMethod[]>;
    getVerificationMethodsAsync(): Promise<FacemapVerificationMethod[]>;
    setJLiveManualCaptureFallbackReason(reason: ManualCaptureFallbackReason): void;
    selectJLiveManualCaptureFallbackReason$(): Observable<ManualCaptureFallbackReason | undefined>;
    selectJLiveFallbackError$(): Observable<JLiveFallbackError | undefined>;
    resetJLiveFallbackError(): void;
    setActiveFaceVerificationMethod: (activeVerificationMethod: FacemapVerificationMethod | undefined) => void;
    getActiveFaceVerificationMethod: () => FacemapVerificationMethod | undefined;
    selectActiveFaceVerificationMethod$: () => Observable<FacemapVerificationMethod | undefined>;
    selectLivenessState$: () => Observable<CredentialFacemapState & LivenessState>;
    setLivenessVisibleFaceFinder: (oval: LivenessRefDistance) => void;
    selectLivenessVisibleFaceFinder$: () => Observable<LivenessRefDistance>;
    selectLivenessAttempt$: () => Observable<number>;
    selectLivenessFeedbackMessage$: () => Observable<UXDisplayMessage>;
    selectLivenessScanning$: () => Observable<boolean>;
    selectLivenessBackgroundColor$: () => Observable<string | undefined>;
    setLivenessStoreToNextAttempt: () => void;
    setLivenessStoreProgress: (progress: string) => void;
    setLivenessStorePhotinusColor: (photinusColor: string | undefined) => void;
    setLivenessStoreDisplayMessage: (displayMessage: UXDisplayMessage) => void;
    setLivenessStoreCameraCommand: (cameraCommand: UXCameraCommand | undefined) => void;
    setLivenessStoreUiCommand: (uiCommand: UXUICommand | undefined) => void;
    selectLivenessProgress$: () => Observable<[number, number]>;
    reset: () => void;
}

export declare interface WorkflowStepFinish {
    readonly category: VirtualStep.Finish;
    finalize$(): Observable<FinalizeResponse>;
}

export declare interface WorkflowStepFinishController extends WorkflowStepBaseController<VirtualStep.Finish> {
    finalize$(): Observable<FinalizeResponse>;
    finalizeAsync(): Promise<FinalizeResponse>;
}

export declare interface WorkflowStepId extends WorkflowStepCredentialLogic<Category.Id> {
    selectIdEntitiesForCountry$(): Observable<IdEntity[]>;
    patchState(params: StoreForIdCredential): void;
    getState(): StoreForIdCredential;
    selectState$(): Observable<StoreForIdCredential>;
    selectSidesForDocumentType$(params: IdSidesParams): Observable<PhysicalDocumentSideClassifier[]>;
    getSidesForDocumentType(params: IdSidesParams): PhysicalDocumentSideClassifier[];
    getIdEntityFromCollection(params: GetIdTypeFromCollectionParams): Generator<IdEntity>;
    selectAllSupportedCountries$(): Observable<SupportedCountry[]>;
    selectFilteredSupportedCountries$(): Observable<SupportedCountry[]>;
    shouldSkipDoctypeSelectionScreen(): boolean;
    isPhysicalDocumentSideRequired: (params: PhysicalDocumentSideQueryParams) => boolean;
    isPhysicalDocumentSideCaptured: (params: PhysicalDocumentSideQueryParams) => boolean;
}

export declare interface WorkflowStepIdController extends WorkflowStepCredentialController<Category.Id> {
    selectIdEntitiesForCountry$(): Observable<IdEntity[]>;
    getIdEntitiesForCountryAsync(): Promise<IdEntity[]>;
    patchState(params: Partial<StoreForIdCredential>): void;
    getState(): StoreForIdCredential;
    selectState$(): Observable<StoreForIdCredential>;
    selectSidesForDocumentType$(params: IdSidesParams): Observable<PhysicalDocumentSideClassifier[]>;
    selectSidesForDocumentTypeAsync(params: IdSidesParams): Promise<PhysicalDocumentSideClassifier[]>;
    getSidesForDocumentType(params: IdSidesParams): PhysicalDocumentSideClassifier[];
    getIdEntityFromCollection(params: GetIdTypeFromCollectionParams): Generator<IdEntity>;
    selectAllSupportedCountries$(): Observable<SupportedCountry[]>;
    selectFilteredSupportedCountries$(): Observable<SupportedCountry[]>;
    shouldSkipDoctypeSelectionScreen(): boolean;
    isPhysicalDocumentSideRequired: (params: PhysicalDocumentSideQueryParams) => boolean;
    isPhysicalDocumentSideCaptured: (params: PhysicalDocumentSideQueryParams) => boolean;
}

export declare interface WorkflowStepMap {
    [VirtualStep.Setup]: WorkflowStepSetup;
    [VirtualStep.Start]: WorkflowStepStart;
    [Category.Id]: WorkflowStepId;
    [Category.Facemap]: WorkflowStepFacemap;
    [Category.Document]: WorkflowStepDocument;
    [Category.Data]: WorkflowStepData;
    [VirtualStep.Finish]: WorkflowStepFinish;
}

export declare interface WorkflowStepSetup {
    readonly category: VirtualStep.Setup;
}

export declare type WorkflowStepSetupController = WorkflowStepBaseController<VirtualStep.Setup>;

export declare interface WorkflowStepStart {
    readonly category: VirtualStep.Start;
}

export declare type WorkflowStepStartController = WorkflowStepBaseController<VirtualStep.Start>;

export declare type WorkflowSuccessCustomEvent = ReturnType<typeof createWorkflowSuccessEvent>;

export declare interface WorkflowTrustCheck {
    getUrl$(locale: Locale, provider: string, country: CountryCode): Observable<TrustCheckUrlResponse>;
    pollTrustCheckStatus$(sessionId: UUID): Observable<TrustCheckResult>;
}

export declare interface WorkflowTrustCheckController {
    getTrustCheckUrl$(locale: Locale, provider: string, country: CountryCode): Observable<TrustCheckUrlResponse>;
    getTrustCheckUrlAsync(locale: Locale, provider: string, country: CountryCode): Promise<TrustCheckUrlResponse>;
    pollTrustCheckStatus$(sessionId: UUID): Observable<TrustCheckResult>;
    pollTrustCheckStatusAsync(sessionId: UUID): Promise<TrustCheckResult>;
}

export declare const wrongSettings$: BehaviorSubject<WrongSettings | undefined>;

export declare type WrongSettings = WrongSettingsCritical | WrongSettingsNonCritical;

export declare const wrongSettings: EventDispatcher<(EventMetadata & WrongSettingsCritical) | (EventMetadata & WrongSettingsNonCritical)>;

declare interface WrongSettingsBase {
    errors: ValueError[];
    originalSettings: unknown;
}

export declare interface WrongSettingsCritical extends WrongSettingsBase {
    isCritical: true;
}

export declare class WrongSettingsError extends Error {
    params: WrongSettings;
    constructor(params: WrongSettings);
}

export declare interface WrongSettingsNonCritical extends WrongSettingsBase {
    isCritical: false;
    fallbackSettings: SettingsRaw;
}

export { }
