import os


def check_if_file_exists(file_path):
    """
    Check if file exists.
    :param file_path:
    :return:
    """
    if os.path.isfile(file_path):
        return True
    else:
        return False


def write_to_file(file_path, content):
    """
    Write content to file.
    :param file_path:
    :param content:
    :return:
    """
    with open(file_path, 'w') as f:
        f.write(content)
