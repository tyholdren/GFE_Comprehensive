export class SectionStatus {
  constructor(transferContainer, section) {
    this.section = section;
    this.transferContainer = transferContainer;
  }

  render() {
    const $sectionStatusWrapper = document.createElement('div');
    const $sectionStatusLabel = document.createElement('label');
    const $sectionStatus = document.createElement('input');

    $sectionStatusLabel.htmlFor = 'container-state';
    $sectionStatusLabel.textContent = `${this.transferContainer.length}/4 Selected`;
    $sectionStatusLabel.id = `${this.section}-section-status-label`;
    $sectionStatus.type = 'checkbox';
    $sectionStatus.checked = false;
    $sectionStatus.name = '0/4 selected';
    $sectionStatusWrapper.append($sectionStatus, $sectionStatusLabel);

    return $sectionStatusWrapper;
  }
}
