const componentMap = {
    'OPEN-PROJECT-MODAL': ({ pageHeaderCallback }) => <button id="open-project-modal" onClick={(e) => { pageHeaderCallback(e) }} className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-add-projects">
        <i className="fa fa-plus me-2"></i>
        Add Project
    </button>
}
export default componentMap;
