import { Button, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction, editUserAction } from "../actions/Action";

interface addEditModal {
  isModalOpen: boolean;
  setIsModalOpen: any;
  prePopulate: any;
  setPrePopulate: any;
}
function AddEditModal(props: addEditModal) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isModalOpen, setIsModalOpen, prePopulate, setPrePopulate } = props;
  const [addLoad, setAddLoad] = useState<boolean>(false);
  const [editLoad, setEditLoad] = useState<boolean>(false);
  const createUserLoad = useSelector((state: any) => state?.createUserLoad);
  const editUserLoad = useSelector((state: any) => state?.editUserLoad);

  const handleModelCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
    setPrePopulate(null);
  };

  useEffect(() => {
    if (addLoad === true && createUserLoad === false) {
      setAddLoad(false);
      handleModelCancel();
    }

    if (editLoad === true && editUserLoad === false) {
      setEditLoad(false);
      handleModelCancel();
    }
  }, [addLoad, createUserLoad, editUserLoad, editLoad]);

  const addEdit = (value: any) => {
    if (prePopulate) {
      const { id } = prePopulate;
      let payload = {
        ...value,
        id: id,
      };
      dispatch(editUserAction(payload));
      setEditLoad(true);
    } else {
      dispatch(createUserAction(value));
      setAddLoad(true);
    }
  };

  useEffect(() => {
    if (prePopulate) {
      form.setFieldsValue({
        first_name: prePopulate?.first_name,
        last_name: prePopulate?.last_name,
        email: prePopulate?.email,
        avatar: prePopulate.avatar,
      });
    }
  }, [prePopulate]);

  return (
    <Modal
      title={!prePopulate ? "Create New User" : "Edit User"}
      open={isModalOpen}
      onCancel={handleModelCancel}
      width={400}
      footer={false}
    >
      <div className="mt-4">
        <Form
          form={form}
          style={{ maxWidth: 600 }}
          onFinish={addEdit}
          layout="vertical"
        >
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Enter your first name!",
              },
            ]}
          >
            <Input placeholder="Please enter first name" />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Enter your last name!",
              },
            ]}
          >
            <Input placeholder="Please enter last name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Enter your email!",
              },
            ]}
          >
            <Input placeholder="Please enter email" />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="Profil Image Link"
            rules={[
              {
                required: true,
                message: "Enter your profile image link",
              },
            ]}
          >
            <Input placeholder="Please enter profile image link" />
          </Form.Item>
          <div className="d-flex justify-content-end mt-5">
            <div className="d-flex">
              <div className="me-3">
                <Button onClick={handleModelCancel}>Cancel</Button>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

export default AddEditModal;
