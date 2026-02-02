import { Alert, Card, Form, Input, message, Select } from "antd";
import { useState } from "react";
import Title from "antd/es/typography/Title";
import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";
import Button from "../../../BasedComponents/BaseUi/Button/Button";

const { Option } = Select;

let DollerPrice = 85000;
let WalletCPK = 12000

const BuySellCurrencies = () => {
  const [form] = Form.useForm();
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [walletBalance, setWalletBalance] = useState<number>(WalletCPK);
  const [currencyInventory, setCurrencyInventory] = useState<number>(0);
  const [spentAmount, setSpentAmount] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  const { data, error, isLoading } = useCurrencies();

  const handleCurrencyChange = (value: string) => {
    setSelectedCurrency(value);
    const selectedCurrencyData = data?.find(
      (currency) => currency.id === value
    );
    if (selectedCurrencyData) {
      setCurrentPrice(selectedCurrencyData.current_price);
    }
  };

  const handleSubmit = () => {
    if (!selectedCurrency || amount <= 0) {
      message.error("Please fill all fields correctly.");
      return;
    }

    if (amount > walletBalance) {
      message.error("Insufficient wallet balance.");
      return;
    }

    const currencyAmount = amount / (currentPrice || 1);

    setWalletBalance(walletBalance - amount);
    setCurrencyInventory(currencyInventory + currencyAmount);
    setSpentAmount(spentAmount + amount);

    message.success(
      <>
        Transaction successful! Bought {currencyAmount.toFixed(2)} of{" "}
        {selectedCurrency}.
      </>
    );
  };

  if (error) {
    return (
      <Alert
        closable
        message="Error loading currencies"
        type="error"
        showIcon
      />
    );
  }

  const Iranian_Inventory = currencyInventory * DollerPrice;

  return (
    <Card title={<Title level={5}>Buy Currencies</Title>}>
      <p className="text-sm font-bold mb-4"></p>
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">My Wallet:</span>
          <span className="text-lg font-bold">${walletBalance.toLocaleString()}</span>
        </div>

        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="amount"
            rules={[{ required: true, message: "Please enter an amount!" }]}
          >
            <Input
              type="number"
              placeholder="Enter amount"
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="h-[42px]"
            />
          </Form.Item>

          <Form.Item
            name="currency"
            rules={[{ required: true, message: "Please select a currency!" }]}
          >
            <Select
              placeholder="Select a currency"
              onChange={handleCurrencyChange}
              loading={isLoading}
              className="h-[42px]"
              showSearch
            >
              {data?.map((currency) => (
                <Option key={currency.id} value={currency.id}>
                  {currency.name} ({currency.symbol})
                </Option>
              ))}
            </Select>
          </Form.Item>

          {currentPrice !== null && (
            <div className="text-sm mb-2">
              <strong className="font-sans">
                Current {selectedCurrency} Price:
              </strong>
              <strong className="font-semibold">
                $ {currentPrice.toFixed(2)}
              </strong>
            </div>
          )}
          <Button>Buy</Button>
        </Form>
      </div>

      <div className="border-t pt-4 text-[12px]">
        <div className="flex justify-between">
          <span className="font-sans">Currency Inventory:</span>
          <span className="font-semibold">
            {selectedCurrency
              ? `${currencyInventory.toLocaleString()} ${selectedCurrency}`
              : "N/A"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-sans">You have spent:</span>
          <span className="font-semibold">${spentAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-sans">IRL Inventory:</span>
          <span className="font-semibold">
            IRL {Iranian_Inventory.toLocaleString()}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default BuySellCurrencies;
